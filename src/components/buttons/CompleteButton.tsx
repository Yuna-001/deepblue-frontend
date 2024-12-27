import { FC } from "react";

const CompleteButton: FC<{ onClick: () => void; isCompleted: boolean }> = ({
  onClick,
  isCompleted,
}) => {
  let classes = "title4 w-16 h-8 p-1 rounded-lg ";

  if (isCompleted) {
    classes += "bg-navy-700 text-navy-500";
  } else {
    classes += "text-navy-800 bg-sky_blue-500";
  }

  return (
    <button onClick={onClick} className={classes} disabled={isCompleted}>
      완료
    </button>
  );
};

export default CompleteButton;
