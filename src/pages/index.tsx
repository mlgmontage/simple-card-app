import { Route, Routes } from "react-router-dom";
import CardView from "./cardview";
import CreateCard from "./createCard";
import { Decks } from "./decks";
import Favorites from "./favories";
import { MenuLayout } from "./Layouts";
import { Regular } from "./regular";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<MenuLayout />}>
        <Route path="" element={<Favorites />} />
        <Route path="/regular" element={<Regular />} />
        <Route path="/decks" element={<Decks />} />
        <Route path="/create" element={<CreateCard />} />
        <Route path="/view/:id" element={<CardView />} />
      </Route>
    </Routes>
  );
};

export default Routing;
