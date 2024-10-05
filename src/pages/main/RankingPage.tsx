import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { fetchQuests, fetchRanking, fetchUserInfo } from "../../utils/api";
import Header from "../../components/layout/Header";
import Button from "../../components/buttons/Button";
import UserInRanking from "../../components/ranking/UserInRanking";
import MainPageLayout from "../../components/layout/MainPageLayout";
import roundPolarLogo from "../../assets/images/rank/round-polar-logo.svg";
import starImg from "../../assets/images/rank/star.svg";

const RankingPage: FC = () => {
  const navigate = useNavigate();

  const { data: rankers = [] } = useQuery({
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

  const userTopPercent = rankers.find(
    (ranker) => ranker.nickname === user?.nickname,
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
      <Header>
        <h1 className="title3 text-navy-100">랭킹</h1>
      </Header>
      <div className="w-full flex flex-col items-center gap-7 h-full pb-14">
        <h2 className="title3 text-navy-100">
          현재까지 상위{" "}
          <span className="text-sky_blue-500">{showingUserTopPercent}%</span>{" "}
          에요
        </h2>
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

        <ul className="w-full border border-navy-700 rounded-lg py-6 px-2 flex flex-col gap-5 h-fit overflow-y-auto scrollbar-hidden">
          {rankers?.map(({ ranking, nickname, level, score }) => (
            <UserInRanking
              key={nickname}
              nickname={nickname}
              ranking={ranking}
              level={level}
              score={score}
            />
          ))}
        </ul>
      </div>
    </MainPageLayout>
  );
};

export default RankingPage;
