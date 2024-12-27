import { FC } from "react";

const UserTopPercentInfo: FC<{ topPercent: number }> = ({ topPercent }) => {
  return (
    <h2 className="title3 text-navy-100">
      현재까지 상위 <span className="text-sky_blue-500">{topPercent}%</span>{" "}
      에요
    </h2>
  );
};

export default UserTopPercentInfo;
