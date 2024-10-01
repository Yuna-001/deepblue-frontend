import { FC } from "react";
import { Outlet } from "react-router-dom";

const RootLayout: FC = () => {
  return (
    <div className="w-1wh h-lvh bg-navy-800 overflow-hidden flex justify-center items-center">
      <main className="w-full max-w-max_width h-full max-h-max_height bg-white overflow-y-scroll">
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
