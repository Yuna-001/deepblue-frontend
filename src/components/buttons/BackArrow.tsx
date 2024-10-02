import { FC } from "react";

import backArrowImg from "../../assets/images/back-arrow.png";

const BackArrow: FC = () => {
  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <img
      src={backArrowImg}
      className="h-14 w-14 p-4 -ml-4 cursor-pointer"
      onClick={handleGoBack}
    />
  );
};

export default BackArrow;
