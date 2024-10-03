import { FC } from "react";
import { Outlet } from "react-router-dom";
import MainNavigation from "./MainNavigation";

const MainPageLayout: FC = () => {
  return (
    <>
      <div className="h-full w-full mx-auto px-5 pb-14">
        <Outlet />
      </div>
      <MainNavigation />
    </>
  );
};

export default MainPageLayout;
