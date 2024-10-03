import { FC } from "react";

import Header from "../components/layout/Header";

import QusetList from "../components/home/QuestList";
import TotalPoint from "../components/home/TotalPoint";
import RemainingTime from "../components/home/RemainingTime";

const HomePage: FC = () => {
  return (
    <>
      <Header>
        <h1 className="title3 text-navy-100">홈</h1>
      </Header>
      <div className="flex flex-row justify-between">
        <TotalPoint />
        <RemainingTime />
      </div>
      <h2 className="title3 text-navy-100 mt-8 mb-6">일일 퀘스트</h2>
      <div className="h-full overflow-y-auto pb-28 scrollbar-hidden">
        <QusetList />
      </div>
    </>
  );
};

export default HomePage;
