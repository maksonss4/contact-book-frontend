import styled, { css } from "styled-components";
import { IText } from ".";

export const SpanStyled = styled.span<IText>`
  ${({ color }) =>
    css`
      color: var(--${color});
    `}
`;
