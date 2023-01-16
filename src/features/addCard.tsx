import { Link } from "react-router-dom";
import { IconButton } from "shared/ui/button";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export const AddCard = () => {
  return (
    <Link to="/create" className="no-decoration">
      <IconButton icon={faPlus} />
    </Link>
  );
};
