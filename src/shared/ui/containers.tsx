import styled from "@emotion/styled";
import { useEffect, useState, HTMLProps } from "react";
import { config } from "shared/config";

const OpacityContainer = styled.div`
  opacity: 0;
  transition: opacity 1000ms;

  &:hover {
    opacity: 1 !important;
  }
`;

export const OpacityBox: React.FC<HTMLProps<HTMLDivElement>> = ({
  children,
  as,
  ...props
}) => {
  const [visibility, setVisibility] = useState(false);

  useEffect(() => {
    const handleMove = () => {
      if (!visibility) {
        setVisibility(true);

        setTimeout(() => {
          setVisibility(false);
        }, config.opacityBoxDelay);
      }
    };

    document.addEventListener("mousemove", handleMove);

    return () => {
      document.removeEventListener("mousemove", handleMove);
    };
  }, []);

  return (
    <OpacityContainer {...props} style={{ opacity: visibility ? "1" : "0" }}>
      {children}
    </OpacityContainer>
  );
};

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
`;
