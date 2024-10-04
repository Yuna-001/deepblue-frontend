import { FC } from "react";
import { Outlet } from "react-router-dom";

import MainNavigation from "./MainNavigation";

const MainNavigationLayout: FC = () => {
  return (
    <>
      <Outlet />
      <MainNavigation />
    </>
  );
};

export default MainNavigationLayout;
