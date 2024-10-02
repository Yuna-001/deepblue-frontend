import { FC } from "react";
import { Outlet } from "react-router-dom";
import MainNavigation from "./MainNavigation";

const MainPageLayout: FC = () => {
  return (
    <>
      <div className="w-11/12 h-full">
        <Outlet />
      </div>
      <MainNavigation />
    </>
  );
};

export default MainPageLayout;
