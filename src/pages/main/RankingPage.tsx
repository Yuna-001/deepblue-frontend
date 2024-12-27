import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { fetchQuests, fetchRanking, fetchUserInfo } from "../../utils/api";
import Button from "../../components/buttons/Button";
import MainPageLayout from "../../components/layout/MainPageLayout";
import roundPolarLogo from "../../assets/images/rank/round-polar-logo.svg";
import starImg from "../../assets/images/rank/star.svg";
import RankingList from "../../components/ranking/RankingList";
import MainHeader from "../../components/layout/MainHeader";
import UserTopPercentInfo from "../../components/ranking/UserTopPercentInfo";

const RankingPage: FC = () => {
  const navigate = useNavigate();

  const { data: players = [] } = useQuery({
    queryFn: fetchRanking,
    queryKey: ["ranking"],
  });

  const { data: user } = useQuery({
    queryFn: fetchUserInfo,
    queryKey: ["userInfo"],
  });

  const { data: quests } = useQuery({
    queryFn: fetchQuests,
    queryKey: ["quests"],
  });

  const userTopPercent = players.find(
    (player) => player.nickname === user?.nickname,
  )?.top_percent;
  const showingUserTopPercent: number = Math.round(Number(userTopPercent || 0));

  const isVisibleStar: boolean = showingUserTopPercent <= 30;
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
          {isVisibleStar && (
            <>
              <img src={starImg} alt="별" className="absolute top-2 right-0" />
              <img src={starImg} alt="별" className="absolute top-7 -right-4" />
            </>
          )}
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
