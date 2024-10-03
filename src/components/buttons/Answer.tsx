import { FC } from "react";

const Answer: FC<{ text: string; onClick: () => void }> = ({
  text,
  onClick,
}) => {
  return (
    <li
      onClick={onClick}
      className="h-16 w-full py-5 px-6 cursor-pointer bg-navy-800 body1 text-navy-100 outline-none rounded-lg border border-navy-700"
    >
      {text}
    </li>
  );
};

export default Answer;
