import { FC, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import SplashPage from "../../pages/onboarding/SplashPage";

const SPLASH_DISPLAY_TIME = 3000;

const RootLayout: FC = () => {
  const [isRevisit, setIsRevisit] = useState<boolean>(
    sessionStorage.getItem("isRevisit") === "true",
  );

  useEffect(() => {
    if (!isRevisit) {
      const timer = setTimeout(() => {
        sessionStorage.setItem("isRevisit", "true");
        setIsRevisit(true);
      }, SPLASH_DISPLAY_TIME);

      return () => clearTimeout(timer);
    }
  }, [isRevisit]);

  return (
    <div className="w-full h-full bg-pc bg-cover bg-center overflow-hidden flex justify-center items-center box-border">
      <main className="w-full h-full max-w-full max-h-full bg-navy-800 relative overflow-hidden md:w-pc_basic md:h-pc_basic">
        {isRevisit ? <Outlet /> : <SplashPage />}
      </main>
    </div>
  );
};

export default RootLayout;
