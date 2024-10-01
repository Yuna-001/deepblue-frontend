import { FC, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import SplashPage from "../../pages/SplashPage";

const SPLASH_DISPLAY_TIME = 1500;

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
    <div className="w-1wh h-lvh  bg-white overflow-hidden flex justify-center items-center">
      <main className="w-full max-w-max_width h-full max-h-max_height bg-navy-800 overflow-y-scroll">
        {isRevisit ? <Outlet /> : <SplashPage />}
      </main>
    </div>
  );
};

export default RootLayout;
