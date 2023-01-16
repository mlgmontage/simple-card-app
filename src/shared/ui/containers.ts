import styled from "@emotion/styled";

export const OpacityBox = styled.div`
  opacity: 0;
  transition: opacity 2000ms;

  &:hover {
    opacity: 1;
  }
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
`;
