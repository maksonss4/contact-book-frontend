import { useContext, useEffect } from "react";
import { ContainerDashboard } from "./styles";
import { UserContext } from "../../Provider/UserProvider";
import { User } from "../../components/User";
import {
  ContactsContext,
  IDataCreateContact,
  IDataUpdateContact,
} from "../../Provider/ContactsProvider";
import { Contacts } from "../../components/Contacts";
import { Modal } from "../../components/Modal";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaCreateContact, schemaUpdateContact } from "../../schemas";
import { FormStyled } from "../Register/styles";

export function Dashboard() {
  const { logout, getUser, loading } = useContext(UserContext);
  const {
    getContacts,
    deleteContact,
    updateContact,
    createContact,
    isOpenModalDeleteContact,
    isOpenModalUpdateContact,
    isOpenModalCreateContact,
    openCloseModalDeleteContact,
    openCloseModalUpdateContact,
    openCloseModalCreateContact,
  } = useContext(ContactsContext);

  const {
    register: registerUpdate,
    handleSubmit: handleSubmitUpdate,
    formState: { errors: errorsUpdate },
  } = useForm<IDataUpdateContact>({
    resolver: yupResolver(schemaUpdateContact),
  });

  const {
    register: registerCreate,
    handleSubmit: handleSubmitCreate,
    formState: { errors: errorsCreate },
  } = useForm<IDataCreateContact>({
    resolver: yupResolver(schemaCreateContact),
  });

  useEffect(() => {
    getUser();
    getContacts();
  }, []);

  return (
    <ContainerDashboard>
      <header>
        <h1>Contact Book</h1>
        <button onClick={logout} type="button">
          Logout
        </button>
      </header>

      {loading ? (
        <p>carregando...</p>
      ) : (
        <>
          <User />
          <Contacts />
        </>
      )}

      {isOpenModalDeleteContact && (
        <Modal>
          <h3>Quer deletar este contato?</h3>
          <div className="div-buttons-delete">
            <button
              onClick={deleteContact}
              className="button-yes"
              type="button"
            >
              Sim
            </button>
            <button
              onClick={() => openCloseModalDeleteContact("")}
              className="button-no"
              type="button"
            >
              Não
            </button>
          </div>
        </Modal>
      )}
      {isOpenModalUpdateContact && (
        <Modal>
          <h3>Atualize o contato</h3>

          <FormStyled onSubmit={handleSubmitUpdate(updateContact)}>
            <div>
              <label htmlFor="first_name">
                Nome:
                {errorsUpdate.first_name && (
                  <span>{errorsUpdate.first_name.message}</span>
                )}
              </label>
              <input
                type="text"
                id="first_name"
                placeholder="Digite o novo nome"
                {...registerUpdate("first_name")}
              />
            </div>

            <div>
              <label htmlFor="last_name">
                Sobrenome:
                {errorsUpdate.last_name && (
                  <span>{errorsUpdate.last_name.message}</span>
                )}
              </label>
              <input
                type="text"
                id="last_name"
                placeholder="Digite o novo sobrenome"
                {...registerUpdate("last_name")}
              />
            </div>

            <div>
              <label htmlFor="email">
                Email:
                {errorsUpdate.email && (
                  <span>{errorsUpdate.email.message}</span>
                )}
              </label>
              <input
                type="text"
                id="email"
                placeholder="Digite o novo email"
                {...registerUpdate("email")}
              />
            </div>

            {/* <div>
              <label htmlFor="phone_number">Telefone:</label>
              <input
                type="text"
                id="phone_number"
                placeholder="Digite o novo telefone"
                {...registerUpdate("phone_number")}
              />
            </div> */}

            <div className="div-buttons-delete">
              <button className="button-yes" type="submit">
                Confirmar
              </button>
              <button
                onClick={() => openCloseModalUpdateContact("")}
                className="button-no"
                type="button"
              >
                Cancelar
              </button>
            </div>
          </FormStyled>
        </Modal>
      )}
      {isOpenModalCreateContact && (
        <Modal>
          <h3>Crie um novo contato</h3>
          <FormStyled onSubmit={handleSubmitCreate(createContact)}>
            <div>
              <label htmlFor="first_name">
                Nome:
                {errorsCreate.first_name && (
                  <span>{errorsCreate.first_name.message}</span>
                )}
              </label>
              <input
                type="text"
                id="first_name"
                placeholder="Digite o novo nome"
                {...registerCreate("first_name")}
              />
            </div>

            <div>
              <label htmlFor="last_name">
                Sobrenome:
                {errorsCreate.last_name && (
                  <span>{errorsCreate.last_name.message}</span>
                )}
              </label>
              <input
                type="text"
                id="last_name"
                placeholder="Digite o novo sobrenome"
                {...registerCreate("last_name")}
              />
            </div>

            <div>
              <label htmlFor="email">
                Email:
                {errorsCreate.email && (
                  <span>{errorsCreate.email.message}</span>
                )}
              </label>
              <input
                type="text"
                id="email"
                placeholder="Digite o novo email"
                {...registerCreate("email")}
              />
            </div>

            <div>
              <label htmlFor="phone_number">
                Telefone:
                {errorsCreate.phone_number && (
                  <span>{errorsCreate.phone_number.message}</span>
                )}
              </label>
              <input
                type="number"
                id="phone_number"
                placeholder="Digite o novo telefone"
                {...registerCreate("phone_number")}
              />
            </div>

            <div className="div-buttons-delete">
              <button className="button-yes" type="submit">
                Confirmar
              </button>
              <button
                onClick={openCloseModalCreateContact}
                className="button-no"
                type="button"
              >
                Cancelar
              </button>
            </div>
          </FormStyled>
        </Modal>
      )}
    </ContainerDashboard>
  );
}
