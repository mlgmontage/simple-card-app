import { Link } from "react-router-dom";

export const Menu = () => {
  return (
    <div className="flex gap-1">
      <Link to="/">Favorites</Link>
      <Link to="/regular">Regular</Link>
      <Link to="/categories">Categories</Link>
    </div>
  );
};
