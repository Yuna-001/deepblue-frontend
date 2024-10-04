import { FC, ReactNode } from "react";

import Header from "./Header";

const OnboardingLayout: FC<{
  children: ReactNode;
  withBackArrow?: boolean;
}> = ({ children, withBackArrow = false }) => {
  return (
    <div className="h-full w-11/12 mx-auto relative flex flex-col">
      <Header withBackArrow={withBackArrow} />
      {children}
    </div>
  );
};

export default OnboardingLayout;
