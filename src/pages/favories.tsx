import { useAppSelector } from "app/store";
import { CardUI, favoritesSelector } from "entities/card";
import { CardGrid } from "shared/ui";

const Favorites = () => {
  const favorites = useAppSelector(favoritesSelector);

  return (
    <div>
      <h1>Favories</h1>
      <CardGrid>
        {favorites.map((card) => (
          <CardUI key={card.id} card={card} />
        ))}
      </CardGrid>
    </div>
  );
};

export default Favorites;
