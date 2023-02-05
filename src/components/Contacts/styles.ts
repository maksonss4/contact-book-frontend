import styled from "styled-components";

export const ContainerContacts = styled.div`
  padding: 10px 20px;
  width: 100%;
  max-width: 500px;

  h2 {
    color: var(--yellow);
    font-weight: bold;
  }

  h4 {
    color: var(--orange);
    font-weight: bold;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-top: 10px;

    li {
      border: 1px solid var(--white);
      border-radius: 5px;
      padding: 5px;
      display: flex;
      flex-direction: column;
      position: relative;

      h3 {
        color: var(--green);
      }

      p {
        color: var(--white);
      }

      .delete-contact {
        display: flex;
        background-color: transparent;
        color: var(--red);
        position: absolute;
        right: 5px;
      }

      .update-contact {
        display: flex;
        background-color: transparent;
        color: var(--orange);
        position: absolute;
        right: 5px;
        top: 30px;
      }
    }
  }

  .div-create-contact {
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      background-color: var(--green);
      color: var(--white);
      font-weight: bold;
      border-radius: 5px;
      padding: 1px 2px;
    }
  }
`;
