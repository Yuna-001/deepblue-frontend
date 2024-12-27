import { FC, ReactNode } from "react";

interface WeeklyActivityProps {
  highlight: string;
  tailText: ReactNode;
  img: string;
  imgDescription: string;
  gapClass: string;
}

const WeeklyActivity: FC<WeeklyActivityProps> = ({
  highlight,
  tailText,
  img,
  imgDescription,
  gapClass,
}) => {
  return (
    <div
      className={`bg-navy-800 flex flex-col items-center rounded-lg px-6 pt-7 ${gapClass}`}
    >
      <h2 className="title4 text-navy-100 text-center">
        최근 일주일간 <span className="text-point_color-mint">{highlight}</span>{" "}
        {tailText}
      </h2>
      <img src={img} alt={imgDescription} />
    </div>
  );
};

export default WeeklyActivity;
