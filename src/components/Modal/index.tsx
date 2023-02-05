import { ReactNode } from "react";
import { ModalContainer } from "./style";

interface IModal {
  children: ReactNode;
}

export function Modal({ children }: IModal) {
  return (
    <ModalContainer>
      <div className="div-modal-container">{children}</div>
    </ModalContainer>
  );
}
