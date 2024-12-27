import { FC, ReactNode } from "react";
import Header from "./Header";

const MainHeader: FC<{
  title: string;
  additionalClass?: string;
  children?: ReactNode;
}> = ({ title, additionalClass, children }) => {
  return (
    <Header>
      <h1 className={`title3 text-navy-100 ${additionalClass ?? ""}`}>
        {title}
      </h1>
      {children}
    </Header>
  );
};

export default MainHeader;
