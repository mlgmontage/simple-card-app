import styled from "@emotion/styled";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";

const Icon = styled(FontAwesomeIcon)`
  color: var(--gray-200);
  cursor: pointer;

  transition: color var(--duration);

  &:hover {
    color: var(--gray-900);
  }
`;

export const IconButton: React.FC<FontAwesomeIconProps> = ({ icon }) => {
  return <Icon icon={icon} />;
};
