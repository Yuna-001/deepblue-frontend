import { FC } from "react";
import Quest from "./Quest";
import { useQuery } from "@tanstack/react-query";
import { fetchQuests } from "../../utils/api";

const QusetList: FC = () => {
  const { data: quests } = useQuery({
    queryFn: fetchQuests,
    queryKey: ["quests"],
    initialData: [],
  });

  return (
    <div className="flex flex-col gap-6 pb-28 title4">
      {quests?.map(({ difficulty, content, score, is_cleared }) => (
        <Quest
          key={score}
          difficulty={difficulty}
          title={content}
          point={score}
          isCompleted={is_cleared}
        />
      ))}
    </div>
  );
};

export default QusetList;
