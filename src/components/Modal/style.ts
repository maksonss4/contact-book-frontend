import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  z-index: 1;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  padding: 10px;

  .div-modal-container {
    width: 100%;
    max-width: 400px;
    background-color: var(--white);
    border-radius: 5px;
    padding: 10px;
    display: flex;
    flex-direction: column;

    h3 {
      font-weight: bold;
      text-align: center;
    }

    .div-buttons-delete {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;

      button {
        border-radius: 5px;
        padding: 1px 3px;
        color: var(--white);
      }

      .button-yes {
        background-color: var(--green);
      }

      .button-no {
        background-color: var(--red);
      }
    }
  }
`;
