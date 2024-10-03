import { FC } from "react";

import Point from "./Point";

const TotalPoint: FC = () => {
  // 백엔드에서 유저 총 포인트 받기
  const userTotalPoint = 1000000;

  return (
    <div className="bg-sky_blue-primary-800 w-30 h-8 rounded-3xl py-1 px-2 flex justify-center text-navy-100">
      <Point point={userTotalPoint} />
    </div>
  );
};

export default TotalPoint;
