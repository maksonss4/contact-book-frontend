import { ReactNode } from "react";
import { SpanStyled } from "./styles";

export interface IText {
  color: "green" | "pink" | "white";
  children: ReactNode;
}

export function Text({ children, color }: IText) {
  return <SpanStyled color={color}>{children}</SpanStyled>;
}
