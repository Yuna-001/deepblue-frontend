import { FC } from "react";

import UserRankingType from "../../models/userRanking";
import UserInRanking from "./UserInRanking";

const RankingList: FC<{ players: UserRankingType[] }> = ({ players }) => {
  return (
    <ul className="w-full border border-navy-700 rounded-lg py-6 px-2 flex flex-col gap-5 h-fit overflow-y-auto scrollbar-hidden">
      {players?.map(({ ranking, nickname, level, score }) => (
        <UserInRanking
          key={nickname}
          nickname={nickname}
          ranking={ranking}
          level={level}
          score={score}
        />
      ))}
    </ul>
  );
};

export default RankingList;
