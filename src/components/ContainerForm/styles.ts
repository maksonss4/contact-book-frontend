import styled from "styled-components";

export const DivStyled = styled.div`
  background-color: var(--white);
  padding: 10px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100%;
  max-width: 480px;
  margin: 0 auto;

  a {
    background-color: var(--pink);
    color: var(--white);
    border-radius: 5px;
    padding: 5px 0;
    width: 100%;
    text-align: center;
    transition: 0.5s;

    :hover {
      background-color: var(--green);
    }
  }
`;
