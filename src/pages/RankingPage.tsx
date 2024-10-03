import { FC } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../components/layout/Header";
import Button from "../components/buttons/Button";
import UserInRanking from "../components/ranking/UserInRanking";

// nickname,score,level,ranking
const USERS = [
  {
    ranking: 1,
    nickname: "가나다라마바사아자차",
    level: 100,
    score: 150000,
  },
  {
    ranking: 2,
    nickname: "최대 10자",
    level: 5,
    score: 99999,
  },
  {
    ranking: 3,
    nickname: "닉네임닉네임닉네임닉네임닉네임",
    level: 5,
    score: 1000,
  },
  {
    ranking: 4,
    nickname: "랭킹",
    level: 5,
    score: 1000,
  },
  {
    ranking: 5,
    nickname: "가로길이",
    level: 5,
    score: 1000,
  },
  {
    ranking: 6,
    nickname: "확인해보기",
    level: 5,
    score: 1000,
  },
  {
    ranking: 7,
    nickname: "언제 다 만들까요...",
    level: 5,
    score: 1000,
  },
  {
    ranking: 8,
    nickname: "ㅠㅠㅠㅠㅠㅠ9",
    level: 5,
    score: 1000,
  },
  {
    ranking: 11,
    nickname: "ㅠㅠㅠㅠㅠㅠ8",
    level: 5,
    score: 1000,
  },
  {
    ranking: 55,
    nickname: "ㅠㅠㅠㅠㅠㅠ7",
    level: 5,
    score: 1000,
  },
  {
    ranking: 80,
    nickname: "ㅠㅠㅠㅠㅠㅠ6",
    level: 5,
    score: 1000,
  },
  {
    ranking: 81,
    nickname: "ㅠㅠㅠㅠㅠㅠ5",
    level: 5,
    score: 1000,
  },
  {
    ranking: 82,
    nickname: "ㅠㅠㅠㅠㅠㅠ4",
    level: 5,
    score: 1000,
  },
  {
    ranking: 83,
    nickname: "ㅠㅠㅠㅠㅠㅠ3",
    level: 5,
    score: 1000,
  },
  {
    ranking: 85,
    nickname: "ㅠㅠㅠㅠㅠㅠ2",
    level: 100,
    score: 1000,
  },
  {
    ranking: 100,
    nickname: "ㅠㅠㅠㅠㅠㅠ1",
    level: 5,
    score: 100,
  },
];

const RankingPage: FC = () => {
  const navigate = useNavigate();
  const topPercent = 10;

  const handleGoHome = () => {
    navigate("/main/home");
  };

  return (
    <>
      <Header>
        <h1 className="title3 text-navy-100">랭킹</h1>
      </Header>
      <div className="w-full flex flex-col items-center gap-7 h-full pb-14">
        <h2 className="title3 text-navy-100">
          현재까지 상위{" "}
          <span className="text-sky_blue-primary-500">{topPercent}%</span> 에요
        </h2>
        <div className="w-[100px] min-h-[100px] max-h-[100px] bg-white rounded-full"></div>
        <Button onClick={handleGoHome}>남은 퀘스트 하러 가기</Button>

        <ul className="w-full border border-navy-700 rounded-lg py-6 px-2 flex flex-col gap-5 h-full overflow-y-auto scrollbar-hidden">
          {USERS.map(({ ranking, nickname, level, score }) => (
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
    </>
  );
};

export default RankingPage;
