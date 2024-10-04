import { FC } from "react";

const RemainingTime: FC = () => {
  return (
    <div className="body1 text-navy-100 flex flex-row gap-2 items-center">
      <div>남은 시간</div>
      <div> 00:00:00</div>
    </div>
  );
};

export default RemainingTime;
