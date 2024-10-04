import { FC, ReactNode } from "react";

const MainPageLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return <div className="h-full w-full mx-auto px-4 pb-14">{children}</div>;
};

export default MainPageLayout;
