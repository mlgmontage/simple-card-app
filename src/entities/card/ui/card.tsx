import styled from "@emotion/styled";
import { PropsWithChildren } from "react";

const CardStyled = styled.div`
  padding: 1rem;
  border: 1px solid black;
`;

export const CardUI: React.FC<PropsWithChildren> = ({ children }) => {
  return <CardStyled>{children}</CardStyled>;
};
