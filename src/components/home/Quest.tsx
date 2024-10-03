import { FC } from "react";
import Point from "./Point";
import CompleteButton from "../buttons/CompleteButton";

const Quest: FC<{ title: string; point: number; isCompleted: boolean }> = ({
  title,
  point,
  isCompleted,
}) => {
  let classes =
    "h-24 w-full rounded-lg flex flex-col justify-between py-5 px-6 ";

  if (isCompleted) {
    //비활성
    classes += "bg-navy-800 text-navy-500 border border-navy-700";
  } else {
    //활성
    classes += "bg-navy-700 text-navy-100";
  }

  // 완료시 isCompleted true로 변경 (백엔드 전송 후 데이터 다시 받기)
  const handleComplete = () => {};

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
