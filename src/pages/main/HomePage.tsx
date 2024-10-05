import { FC, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";

import Header from "../../components/layout/Header";
import QusetList from "../../components/home/QuestList";
import TotalPoint from "../../components/home/TotalPoint";
import RemainingTime from "../../components/home/RemainingTime";
import MainPageLayout from "../../components/layout/MainPageLayout";
import { submitDailyCheck } from "../../utils/api";

const HomePage: FC = () => {
  const { mutate } = useMutation({
    mutationFn: submitDailyCheck,
  });

  useEffect(() => {
    mutate();
  }, []);

  return (
    <MainPageLayout>
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
    </MainPageLayout>
  );
};

export default HomePage;
