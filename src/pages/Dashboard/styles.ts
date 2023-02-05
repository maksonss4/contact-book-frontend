import styled from "styled-components";

export const ContainerDashboard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 100%;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 20px 10px;
    width: 100%;
    max-width: 500px;

    h1 {
      color: var(--white);
      font-size: 25px;
    }

    button {
      border-radius: 5px;
      padding: 0 5px;
      font-weight: bold;
    }
  }
`;
