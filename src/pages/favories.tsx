import { useAppSelector } from "app/store";
import { CardUI, favoritesSelector } from "entities/card";

const Favorites = () => {
  const favorites = useAppSelector(favoritesSelector);

  return (
    <div>
      <h1>Favories</h1>
      {favorites.map((card) => (
        <CardUI key={card.id}>{card.text}</CardUI>
      ))}
    </div>
  );
};

export default Favorites;
