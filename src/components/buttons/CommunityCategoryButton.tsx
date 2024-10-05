import { FC } from "react";
import { NavLink } from "react-router-dom";

const CommunityCategoryButton: FC<{
  category: string;
  sort: string | undefined;
  text: string;
}> = ({ category, sort, text }) => {
  if (!sort) sort = "realtime";

  const baseClasses =
    "w-[76px] title4 pb-1 transition-all duration-75 text-center ";
  const activeClasses =
    baseClasses + "text-navy-100 border-b-2 border-navy-100";
  const inactiveClasses = baseClasses + "text-navy-700";

  return (
    <NavLink
      to={`/main/communication/${category}/${sort}`}
      className={({ isActive }) => (isActive ? activeClasses : inactiveClasses)}
    >
      {text}
    </NavLink>
  );
};

export default CommunityCategoryButton;
