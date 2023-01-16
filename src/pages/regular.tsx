import { CardUI, regularsSelector } from "entities/card";
import { AddCard } from "features";
import { useSelector } from "react-redux";
import { CardGrid } from "shared/ui";

export const Regular = () => {
  const regular = useSelector(regularsSelector);

  return (
    <div>
      <h1>Regular</h1>
      <div className="text-right">
        <AddCard />
      </div>
      <CardGrid>
        {regular.map((card) => (
          <CardUI key={card.id} card={card} />
        ))}
      </CardGrid>
    </div>
  );
};
