import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useQueries } from "@tanstack/react-query";

import { fetchQuests, fetchRanking, fetchUserInfo } from "../../utils/api";
import Button from "../../components/buttons/Button";
import MainPageLayout from "../../components/layout/MainPageLayout";
import roundPolarLogo from "../../assets/images/rank/round-polar-logo.svg";
import RankingList from "../../components/ranking/RankingList";
import MainHeader from "../../components/layout/MainHeader";
import UserTopPercentInfo from "../../components/ranking/UserTopPercentInfo";
import StarBadge from "../../components/ranking/StarBadge";

const RankingPage: FC = () => {
  const navigate = useNavigate();

  const datas = useQueries({
    queries: [
      { queryFn: fetchRanking, queryKey: ["ranking"] },
      {
        queryFn: fetchUserInfo,
        queryKey: ["userInfo"],
      },
      {
        queryFn: fetchQuests,
        queryKey: ["quests"],
      },
    ],
  });

  const players = datas[0].data ?? [];
  const user = datas[1].data;
  const quests = datas[2].data;

  const userTopPercent = players.find(
    (player) => player.nickname === user?.nickname,
  )?.top_percent;
  const showingUserTopPercent: number = Math.round(Number(userTopPercent || 0));

  const isTop30Percent: boolean = showingUserTopPercent <= 30;
  const isAllClear: boolean =
    quests?.every(({ is_cleared }) => is_cleared === true) ?? false;

  const handleGoHome = () => {
    navigate("/main/home");
  };

  return (
    <MainPageLayout>
      <MainHeader title="랭킹" />
      <div className="w-full flex flex-col items-center gap-7 h-full pb-14">
        <UserTopPercentInfo topPercent={showingUserTopPercent} />
        <div className="relative">
          <img
            src={roundPolarLogo}
            alt="딥블루 캐릭터 로고"
            className="-z-10"
          />
          <StarBadge isVisible={isTop30Percent} />
        </div>
        <Button onClick={handleGoHome} disabled={isAllClear}>
          {isAllClear ? "새로운 퀘스트 생성 중" : "남은 퀘스트 하러 가기"}
        </Button>
        <RankingList players={players} />
      </div>
    </MainPageLayout>
  );
};

export default RankingPage;
