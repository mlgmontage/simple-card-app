import styled from "@emotion/styled";
import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import { Card } from "../model/cards.types";

const CardStyled = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-decoration: none;

  padding: 1rem;
  height: 12rem;

  font-size: var(--fz-md);

  overflow: hidden;
  border: 1px solid var(--gray-200);
  border-radius: var(--round-md);
`;

type Props = {
  card: Card;
};

export const CardUI: React.FC<Props> = ({ card }) => {
  return (
    <CardStyled to={`/view/${card.id}`}>
      <span>{card.text}</span>
      <small className="text-gray">{card.deck}</small>
    </CardStyled>
  );
};
