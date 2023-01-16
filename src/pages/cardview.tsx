import { useCard } from "entities/card";
import { ToggleCard } from "features";
import { RemoveCard } from "features/removeCard";
import { useParams } from "react-router-dom";

const CardView = () => {
  const { id } = useParams();
  if (!id) return <div>Id is not provided</div>;

  const card = useCard(id);
  if (!card) return <div>Card not found</div>;

  return (
    <div>
      <div className="text-right">
        <RemoveCard id={card.id} />{" "}
        <ToggleCard category={card.category} id={card.id} />
      </div>

      <h1 style={{ marginBlock: "100px" }} className="text-center">
        {card?.text}
      </h1>
      <div className="text-right text-gray text-sm">{card?.deck}</div>
    </div>
  );
};

export default CardView;
