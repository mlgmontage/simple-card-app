import { CardUI, regularsSelector } from "entities/card";
import { useSelector } from "react-redux";
import { CardGrid } from "shared/ui";

export const Regular = () => {
  const regular = useSelector(regularsSelector);

  return (
    <div>
      <h1>Regular</h1>
      <CardGrid>
        {regular.map((card) => (
          <CardUI key={card.id} card={card} />
        ))}
      </CardGrid>
    </div>
  );
};
