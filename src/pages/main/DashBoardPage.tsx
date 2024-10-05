import { FC } from "react";

import Header from "../../components/layout/Header";
import graphImg from "../../assets/images/dashboard/graph.svg";
import winkPolarImg from "../../assets/images/dashboard/wink-polar.svg";
import MainPageLayout from "../../components/layout/MainPageLayout";
import { fetchDashboardInfo } from "../../utils/api";
import { useQuery } from "@tanstack/react-query";

const DashboardPage: FC = () => {
  const { data } = useQuery({
    queryFn: fetchDashboardInfo,
    queryKey: ["dashboard"],
    initialData: {
      cleared_quest_count: 0,
      total_cleared_day: 0,
      level: 0,
      avg_week_cleared_quest: 0,
      daily_check_count: 0,
    },
  });

  const showingAvgQuest: string = data.avg_week_cleared_quest.toFixed(2);

  return (
    <MainPageLayout>
      <Header>
        <h1 className="title3 text-navy-100">대시보드</h1>
      </Header>
      <div className="h-full pb-20 pt-3 overflow-y-auto scrollbar-hidden">
        <div className="bg-navy-700 border border-navy-700 h-fit p-4 rounded-lg flex flex-col gap-3 ">
          <div className="flex flex-row items-center justify-between text-center ">
            <div className="border-r-2 border-navy-600 w-full flex flex-col py-2">
              <h4 className="title4 text-navy-100">
                {data.cleared_quest_count}개
              </h4>
              <span className="body3 text-sky_blue-500">완료 퀘스트</span>
            </div>
            <div className="border-r-2 border-navy-600 w-full flex flex-col py-2">
              <h4 className="title4 text-navy-100">
                {data.total_cleared_day}일
              </h4>
              <span className="body3 text-sky_blue-500">누적 완료일</span>
            </div>
            <div className="w-full flex flex-col py-2">
              <h4 className="title4 text-navy-100">Lv {data.level}</h4>
              <span className="body3 text-sky_blue-500">My 레벨</span>
            </div>
          </div>

          <div className="bg-navy-800 flex flex-col items-center py-7 px-6 gap-6 rounded-lg">
            <h4 className="title4 text-navy-100">
              최근 일주일간{" "}
              <span className="text-point_color-mint">
                평균 {showingAvgQuest}건
              </span>{" "}
              의 <br />
              퀘스트를 달성했어요.
            </h4>
            <img src={graphImg} />
          </div>

          <div className="bg-navy-800 flex flex-col items-center rounded-lg px-6 pt-7 gap-1">
            <h4 className="title4 text-navy-100">
              최근 일주일간{" "}
              <span className="text-point_color-mint">
                {data.daily_check_count}번
              </span>{" "}
              출석했어요.
            </h4>
            <img src={winkPolarImg} />
          </div>
        </div>
      </div>
    </MainPageLayout>
  );
};

export default DashboardPage;
