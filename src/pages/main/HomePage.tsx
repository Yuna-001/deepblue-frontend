import { FC, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";

import QusetList from "../../components/home/QuestList";
import TotalPoint from "../../components/home/TotalPoint";
import RemainingTime from "../../components/home/RemainingTime";
import MainPageLayout from "../../components/layout/MainPageLayout";
import { queryClient, resetQuests, submitDailyCheck } from "../../utils/api";
import MainHeader from "../../components/layout/MainHeader";

const HomePage: FC = () => {
  const { mutate: mutateDailyCheck } = useMutation({
    mutationFn: submitDailyCheck,
  });

  const { mutate: mutateResetQuests } = useMutation({
    mutationFn: resetQuests,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["quests"] });
    },
  });

  useEffect(() => {
    mutateDailyCheck();
    mutateResetQuests();
  }, []);

  return (
    <MainPageLayout>
      <MainHeader title="홈" />
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
