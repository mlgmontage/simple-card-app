import { useCard } from "entities/card";
import { useParams } from "react-router-dom";

const CardView = () => {
  const { id } = useParams();

  if (!id) return <div>Id is not provided</div>;

  const card = useCard(id);

  return (
    <div>
      <h1 style={{ marginBlock: "100px" }} className="text-center">
        {card?.text}
      </h1>

      <div className="text-right text-gray text-sm">{card?.deck}</div>
    </div>
  );
};

export default CardView;
