import styled from "@emotion/styled";
import { PropsWithChildren } from "react";

const CardStyled = styled.div`
  padding: 1rem;
  height: 12rem;

  font-size: var(--fz-md);

  overflow: hidden;
  border: 1px solid var(--gray-100);
  border-radius: var(--round-md);
`;

export const CardUI: React.FC<PropsWithChildren> = ({ children }) => {
  return <CardStyled>{children}</CardStyled>;
};
