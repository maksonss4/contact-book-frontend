import { ReactNode } from "react";
import { DivStyled } from "./styles";

interface IContainerForm {
  children: ReactNode;
}

export function ContainerForm({ children }: IContainerForm) {
  return <DivStyled>{children}</DivStyled>;
}
