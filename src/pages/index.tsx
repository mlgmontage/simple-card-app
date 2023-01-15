import { Route, Routes } from "react-router-dom";
import Favorites from "./favories";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Favorites />} />
    </Routes>
  );
};

export default Routing;
