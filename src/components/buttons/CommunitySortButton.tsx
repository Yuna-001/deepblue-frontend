import { FC, ReactNode } from "react";
import { NavLink } from "react-router-dom";

const CommunitySortButton: FC<{
  category: string | undefined;
  sort: string;
  children: ReactNode;
}> = ({ category, sort, children }) => {
  if (!category) category = "all";

  const baseClasses =
    "w-20 h-8 rounded-lg flex flex-row gap-1 justify-center items-center transition-all duration-75 ";
  const activeClasses = baseClasses + "bg-sky_blue-300 text-navy-700 ";
  const inactiveClasses = baseClasses + "bg-navy-700 text-navy-500";

  return (
    <NavLink
      to={`/main/communication/${category}/${sort}`}
      className={({ isActive }) => (isActive ? activeClasses : inactiveClasses)}
    >
      {children}
    </NavLink>
  );
};

export default CommunitySortButton;
