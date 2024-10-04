import { FC, ReactNode } from "react";
import BackArrow from "../buttons/BackArrow";

const Header: FC<{ children?: ReactNode; withBackArrow?: boolean }> = ({
  children = <></>,
  withBackArrow = false,
}) => {
  return (
    <header className="h-14 w-full flex flex-row items-center justify-between">
      {withBackArrow && <BackArrow />}
      {children}
    </header>
  );
};

export default Header;
