import { FC } from "react";
import Quest from "./Quest";

type QuestType = {
  id: string;
  title: string;
  point: number;
  isCompleted: boolean;
};

const QusetList: FC = () => {
  // 백엔드에서 유저 맞춤 퀘스트 받기
  const quests: Array<QuestType> = [
    {
      id: "1",
      title: "내용을 입력해주세요.",
      point: 10,
      isCompleted: false,
    },
    { id: "2", title: "내용을 입력해주세요.", point: 1520, isCompleted: true },
    {
      id: "3",
      title: "내용을 입력해주세요.",
      point: 3333330,
      isCompleted: true,
    },
    { id: "4", title: "내용을 입력해주세요.", point: 340, isCompleted: true },
    { id: "5", title: "내용을 입력해주세요.", point: 3450, isCompleted: true },
    { id: "6", title: "내용을 입력해주세요.", point: 1160, isCompleted: true },
  ];

  return (
    <div className="flex flex-col gap-6 pb-28 title4">
      {quests.map(({ id, title, point, isCompleted }) => (
        <Quest key={id} title={title} point={point} isCompleted={isCompleted} />
      ))}
    </div>
  );
};

export default QusetList;
