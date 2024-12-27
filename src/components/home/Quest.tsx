import { FC } from "react";
import Point from "./Point";
import CompleteButton from "../buttons/CompleteButton";
import { useMutation } from "@tanstack/react-query";
import { completeQuest, queryClient } from "../../utils/api";

const Quest: FC<{
  difficulty: string;
  title: string;
  point: number;
  isCompleted: boolean;
}> = ({ difficulty, title, point, isCompleted }) => {
  const { mutate } = useMutation({
    mutationFn: completeQuest,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["quests"] });
      queryClient.invalidateQueries({ queryKey: ["userInfo"] });
    },
  });

  let classes =
    "h-24 w-full rounded-lg flex flex-col justify-between py-5 px-6 ";

  if (isCompleted) {
    classes += "bg-navy-800 text-navy-500 border border-navy-700";
  } else {
    classes += "bg-navy-700 text-navy-100";
  }

  const handleComplete = () => {
    mutate(difficulty);
  };

  return (
    <section className={classes}>
      <h2>{title}</h2>
      <div className="flex flex-row justify-between items-end">
        <Point point={point} />
        <CompleteButton onClick={handleComplete} isCompleted={isCompleted} />
      </div>
    </section>
  );
};

export default Quest;
