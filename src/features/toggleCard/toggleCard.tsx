import { faHeart, faHeartBroken } from "@fortawesome/free-solid-svg-icons";
import { useAppDispatch } from "app/store";
import { CategoryT, toggle } from "entities/card";
import { IconButton } from "shared/ui/button";

type Props = {
  id: string;
  category: CategoryT;
};

export const ToggleCard: React.FC<Props> = ({ category, id }) => {
  const dispatch = useAppDispatch();
  const icon = category === "favorite" ? faHeart : faHeartBroken;

  return (
    <div className="text-gray text-right">
      <span onClick={() => dispatch(toggle(id))}>
        <IconButton icon={icon} />
      </span>
    </div>
  );
};
