import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { IChildren } from "..";
import { api } from "../../services";

export const ContactsContext = createContext({} as IContactsContext);

interface IContactsContext {
  contacts: IContact[];
  isOpenModalDeleteContact: boolean;
  isOpenModalUpdateContact: boolean;
  isOpenModalCreateContact: boolean;
  idContact: string;
  getContacts: () => void;
  openCloseModalDeleteContact: (id: string) => void;
  openCloseModalUpdateContact: (id: string) => void;
  openCloseModalCreateContact: () => void;
  deleteContact: () => void;
  updateContact: (data: IDataUpdateContact) => void;
  createContact: (data: IDataCreateContact) => void;
}

export interface IDataUpdateContact {
  first_name?: string;
  last_name?: string;
  email?: string;
  phone_number?: string;
}

export interface IDataCreateContact {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
}

export interface IContact {
  email: string;
  first_name: string;
  last_name?: string;
  id: string;
  phone_number: number;
}

export function RegistrationProvider({ children }: IChildren) {
  const [contacts, setContacts] = useState([] as IContact[]);
  const [idContact, setIdContact] = useState("");
  const [isOpenModalCreateContact, setIsOpenModalCreateContact] =
    useState(false);
  const [isOpenModalDeleteContact, setIsOpenModalDeleteContact] =
    useState(false);
  const [isOpenModalUpdateContact, setIsOpenModalUpdateContact] =
    useState(false);
  const navigate = useNavigate();

  function getContacts() {
    const token = localStorage.getItem("@contact-book");
    if (token) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      api
        .get("/contacts")
        .then((res) => {
          setContacts(res.data);
        })
        .catch(() => {
          navigate("/landingpage", { replace: true });
        });
    } else {
      navigate("/landingpage", { replace: true });
    }
  }

  function openCloseModalDeleteContact(id: string) {
    setIsOpenModalDeleteContact(!isOpenModalDeleteContact);
    setIdContact(id);
  }

  function openCloseModalUpdateContact(id: string) {
    setIsOpenModalUpdateContact(!isOpenModalUpdateContact);
    setIdContact(id);
  }

  function openCloseModalCreateContact() {
    setIsOpenModalCreateContact(!isOpenModalCreateContact);
  }

  function deleteContact() {
    api
      .delete(`/contacts/${idContact}`)
      .then(() => {
        setIsOpenModalDeleteContact(!isOpenModalDeleteContact);
        getContacts();
        toast.success("Contato deletado com sucesso", { autoClose: 3000 });
      })
      .catch((err) => {
        if (err.response.data.message === "Contact not found.") {
          toast.error("Contato não existe", { autoClose: 3000 });
        }
        setIsOpenModalDeleteContact(!isOpenModalDeleteContact);
      });
  }

  function updateContact(data: IDataUpdateContact) {
    api
      .patch(`/contacts/${idContact}`, data)
      .then(() => {
        setIsOpenModalUpdateContact(!isOpenModalUpdateContact);
        getContacts();
        toast.success("Contato atualizado com sucesso", { autoClose: 3000 });
      })
      .catch(() => {
        toast.error("Não foi possível atualizar o contato");
        setIsOpenModalUpdateContact(!isOpenModalUpdateContact);
      });
  }

  function createContact(data: IDataCreateContact) {
    api
      .post("/contacts", data)
      .then(() => {
        setIsOpenModalCreateContact(!isOpenModalCreateContact);
        getContacts();
        toast.success("Contato criado com sucesso", { autoClose: 3000 });
      })
      .catch(() => {
        toast.error("Não foi possível criar o contato");
        setIsOpenModalCreateContact(!isOpenModalCreateContact);
      });
  }

  return (
    <ContactsContext.Provider
      value={{
        contacts,
        idContact,
        isOpenModalDeleteContact,
        isOpenModalUpdateContact,
        isOpenModalCreateContact,
        openCloseModalDeleteContact,
        openCloseModalUpdateContact,
        openCloseModalCreateContact,
        getContacts,
        deleteContact,
        updateContact,
        createContact,
      }}
    >
      {children}
    </ContactsContext.Provider>
  );
}
