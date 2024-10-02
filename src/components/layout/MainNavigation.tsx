import { FC } from "react";
import { NavLink } from "react-router-dom";

const MainNavigation: FC = () => {
  return (
    <nav className="absolute bottom-0 w-full h-14 bg-red-500 flex flex-row justify-around items-center">
      <NavLink to="/home">HOME</NavLink>
      <NavLink to="/home/dashboard">DASHBOARD</NavLink>
      <NavLink to="/home/ranking">RANKING</NavLink>
      <NavLink to="/home/community">COMMUTNITY</NavLink>
    </nav>
  );
};

export default MainNavigation;
