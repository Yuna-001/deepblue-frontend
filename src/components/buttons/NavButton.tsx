import { FC } from "react";
import { NavLink, NavLinkRenderProps } from "react-router-dom";

const NavButton: FC<{
  destination: string;
  text: string;
  activeImg: string;
  inactiveImg: string;
}> = ({ destination, text, activeImg, inactiveImg }) => {
  return (
    <NavLink to={destination} className="block mb-1">
      {({ isActive }: NavLinkRenderProps) => (
        <div className="flex flex-col h-full items-center justify-end gap-[2px]">
          <img
            src={isActive ? activeImg : inactiveImg}
            alt={text}
            width={28}
            height={28}
          />
          <div
            className={
              isActive ? "nav_text text-navy-100" : "nav_text text-navy-700"
            }
          >
            {text}
          </div>
        </div>
      )}
    </NavLink>
  );
};

export default NavButton;
