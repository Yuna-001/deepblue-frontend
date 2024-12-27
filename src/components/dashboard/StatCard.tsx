import { FC } from "react";

interface StatCardProps {
  stat: string;
  label: string;
  borderRight?: boolean;
}

const StatCard: FC<StatCardProps> = ({ stat, label, borderRight }) => {
  let classes = "w-full flex flex-col py-2 ";

  if (borderRight) {
    classes += "border-r-2 border-navy-600";
  }

  return (
    <div className={classes}>
      <h3 className="title4 text-navy-100">{stat}</h3>
      <span className="body3 text-sky_blue-500">{label}</span>
    </div>
  );
};

export default StatCard;
