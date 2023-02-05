import styled from "styled-components";

export const ContainerLandingpage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px 15px;
  p {
    font-size: 20px;
    color: var(--white);
    text-align: center;
  }
`;

export const DivLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  a {
    background-color: var(--pink);
    color: var(--white);
    border-radius: 5px;
    padding: 2px 5px;
    width: 100%;
    max-width: 150px;
    text-align: center;
    font-weight: bold;
  }
`;
