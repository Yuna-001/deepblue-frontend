import { FC } from "react";

import lyingPolarImg from "../../assets/images/splash/polar-lie.svg";
import logo from "../../assets/images/splash/logo_deepblue_56.svg";

const SplashPage: FC = () => {
  return (
    <div className="bg-splash h-full w-full bg-cover bg-no-repeat relative">
      <img src={lyingPolarImg} className="absolute bottom-24 right-5" />
      <div className="w-full flex flex-row justify-center absolute bottom-6">
        <div className="h-fit w-[328px] flex flex-row items-center gap-4 ">
          <img src={logo} alt="딥블루 로고" />
          <div className="text-navy-100 flex flex-col">
            <h3 className="title3">딥블루</h3>
            <p className="body1">당신의 마음 속, 깊은 바다까지</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplashPage;
