import { Outlet } from "react-router-dom";
import { Menu } from "widgets";

export const MenuLayout = () => {
  return (
    <>
      <Menu />
      <Outlet />
    </>
  );
};
