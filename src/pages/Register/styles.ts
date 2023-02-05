import styled from "styled-components";

export const ContainerRegister = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px 15px;
`;

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;

  h2 {
    color: var(--green);
    text-align: center;
    font-size: 25px;
    font-weight: bold;
  }

  div {
    display: flex;
    flex-direction: column;
  }

  label {
    font-size: 14px;
    display: flex;
    justify-content: space-between;

    span {
      color: var(--red);
    }
  }

  input {
    border: 1px solid var(--black);
    border-radius: 5px;
    padding: 0 5px;
    width: 100%;
  }

  button {
    background-color: var(--pink);
    color: var(--white);
    border-radius: 5px;
    padding: 5px 0;
    transition: 0.5s;

    :hover {
      background-color: var(--green);
    }
  }
`;
