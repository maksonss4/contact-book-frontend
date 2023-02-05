import { useContext } from "react";
import { ContactsContext } from "../../Provider/ContactsProvider";
import { Text } from "../Text";
import { BsTrash, BsPencil } from "react-icons/bs";
import { ContainerContacts } from "./styles";

export function Contacts() {
  const {
    contacts,
    openCloseModalDeleteContact,
    openCloseModalCreateContact,
    openCloseModalUpdateContact,
  } = useContext(ContactsContext);

  return (
    <ContainerContacts>
      {contacts.length ? (
        <>
          <div className="div-create-contact">
            <h2>Seus contatos</h2>
            <button onClick={openCloseModalCreateContact} type="button">
              Criar Contato
            </button>
          </div>
          <ul>
            {contacts.map((contact) => {
              return (
                <li key={contact.id}>
                  <h3>{contact.first_name}</h3>
                  <p>
                    <Text color="pink">Sobrenome: </Text>
                    {contact.last_name ? contact.last_name : "---"}
                  </p>
                  <p>
                    <Text color="pink">Telefone: </Text>
                    {contact.phone_number}
                  </p>
                  <p>
                    <Text color="pink">Email: </Text>
                    {contact.email}
                  </p>
                  <button
                    onClick={() => openCloseModalDeleteContact(contact.id)}
                    className="delete-contact"
                    type="button"
                  >
                    <BsTrash />
                  </button>
                  <button
                    onClick={() => openCloseModalUpdateContact(contact.id)}
                    className="update-contact"
                    type="button"
                  >
                    <BsPencil />
                  </button>
                </li>
              );
            })}
          </ul>
        </>
      ) : (
        <div className="div-create-contact">
          <h4>Você não possui contatos</h4>
          <button onClick={openCloseModalCreateContact} type="button">
            Criar Contato
          </button>
        </div>
      )}
    </ContainerContacts>
  );
}
