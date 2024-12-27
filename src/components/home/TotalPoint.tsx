import { FC } from "react";

import Point from "./Point";
import { useQuery } from "@tanstack/react-query";
import { fetchUserInfo } from "../../utils/api";

const TotalPoint: FC = () => {
  const { data: userInfo } = useQuery({
    queryFn: fetchUserInfo,
    queryKey: ["userInfo"],
    initialData: {
      nickname: "",
      score: 0,
      user: "",
    },
  });

  return (
    <div className="bg-sky_blue-800 w-30 h-8 rounded-3xl py-1 px-2 flex justify-center text-navy-100  min-w-20">
      <Point point={userInfo?.score || 0} />
    </div>
  );
};

export default TotalPoint;
