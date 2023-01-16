import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useAppDispatch } from "app/store";
import { remove } from "entities/card";
import { IconButton } from "shared/ui/button";

type Props = {
  id: string;
};

export const RemoveCard: React.FC<Props> = ({ id }) => {
  const dispatch = useAppDispatch();

  return (
    <span className="text-gray " onClick={() => dispatch(remove(id))}>
      <IconButton icon={faTrash} />
    </span>
  );
};
