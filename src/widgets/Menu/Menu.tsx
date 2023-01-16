import { Link } from "react-router-dom";
import { OpacityBox } from "shared/ui";
import root from "./menu.module.css";

export const Menu = () => {
  return (
    <OpacityBox className={root.menu}>
      <Link to="/">Favorites</Link>
      <Link to="/regular">Regular</Link>
      <Link to="/decks">Decks</Link>
    </OpacityBox>
  );
};
