import { FC } from "react";
import starImg from "../../assets/images/rank/star.svg";

const StarBadge: FC<{ isVisible?: boolean }> = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <>
      <img src={starImg} alt="별" className="absolute top-2 right-0" />
      <img src={starImg} alt="별" className="absolute top-7 -right-4" />
    </>
  );
};

export default StarBadge;
