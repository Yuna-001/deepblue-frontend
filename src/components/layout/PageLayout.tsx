import { FC, ReactNode } from "react";

const PageLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return <div className="h-full w-11/12 mx-auto relative">{children}</div>;
};

export default PageLayout;
