import { FC } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../../components/layout/Header";
import Button from "../../components/buttons/Button";
import UserInRanking from "../../components/ranking/UserInRanking";
import MainPageLayout from "../../components/layout/MainPageLayout";
import { useQuery } from "@tanstack/react-query";
import { fetchRanking } from "../../utils/api";

const RankingPage: FC = () => {
  const navigate = useNavigate();

  const { data: users = [] } = useQuery({
    queryFn: fetchRanking,
    queryKey: ["ranking"],
  });

  const myTopPercent = users?.find(
    (user) => user.top_percent !== null,
  )?.top_percent;

  const rankers = users?.filter(({ ranking }) => ranking !== null);

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
          <span className="text-sky_blue-500">{myTopPercent || "N"}%</span> 에요
        </h2>
        <div className="w-[100px] min-h-[100px] max-h-[100px] bg-white rounded-full"></div>
        <Button onClick={handleGoHome}>남은 퀘스트 하러 가기</Button>

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
