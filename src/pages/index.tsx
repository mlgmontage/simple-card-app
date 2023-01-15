import { Route, Routes } from "react-router-dom";
import { Categories } from "./categories";
import Favorites from "./favories";
import { MenuLayout } from "./Layouts";
import { Regular } from "./regular";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<MenuLayout />}>
        <Route path="" element={<Favorites />} />
        <Route path="/regular" element={<Regular />} />
        <Route path="/categories" element={<Categories />} />
      </Route>
    </Routes>
  );
};

export default Routing;
