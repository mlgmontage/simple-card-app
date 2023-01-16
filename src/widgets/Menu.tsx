import { Link } from "react-router-dom";
import { OpacityBox } from "shared/ui";

export const Menu = () => {
  return (
    <OpacityBox className="flex gap-1 items-center">
      <Link to="/">Favorites</Link>
      <Link to="/regular">Regular</Link>
      <Link to="/decks">Decks</Link>
    </OpacityBox>
  );
};
