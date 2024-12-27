import graphImg from "../../assets/images/dashboard/graph.svg";
import winkPolarImg from "../../assets/images/dashboard/wink-polar.svg";
import MainPageLayout from "../../components/layout/MainPageLayout";
import { fetchDashboardInfo } from "../../utils/api";
import { useQuery } from "@tanstack/react-query";
import MainHeader from "../../components/layout/MainHeader";
import StatCard from "../../components/dashboard/StatCard";
import WeeklyActivity from "../../components/dashboard/WeeklyActivity";

const DashboardPage = () => {
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

  const showingAvgQuest: string = data.avg_week_cleared_quest.toFixed(1);

  return (
    <MainPageLayout>
      <MainHeader title="대시보드" />
      <div className="h-full w-full pb-20 pt-3 overflow-y-auto scrollbar-hidden flex flex-col justify-center">
        <div className="bg-navy-700 border border-navy-700 h-fit p-4 rounded-lg flex flex-col gap-3">
          <div className="flex flex-row items-center justify-between text-center ">
            <StatCard
              stat={`${data.cleared_quest_count}개`}
              label="완료 퀘스트"
              borderRight
            />
            <StatCard
              stat={`${data.total_cleared_day}일`}
              label="누적 완료일"
              borderRight
            />
            <StatCard stat={`Lv ${data.level}`} label="My 레벨" />
          </div>

          <WeeklyActivity
            highlight={`평균 ${showingAvgQuest}건`}
            tailText={
              <>
                의 <br />
                퀘스트를 달성했어요.
              </>
            }
            img={graphImg}
            imgDescription="최근 일주일간 일별 퀘스트 달성 개수를 보여주는 차트"
            gapClass="gap-6"
          />
          <WeeklyActivity
            highlight={`${data.daily_check_count}번`}
            tailText="출석했어요."
            img={winkPolarImg}
            imgDescription="윙크하는 북금곰 캐릭터"
            gapClass="gap-1"
          />
        </div>
      </div>
    </MainPageLayout>
  );
};

export default DashboardPage;
