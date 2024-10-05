import { FC, useState } from "react";
import HearIcon from "../icons/HeartIcon";

type PostProps = {
  id: string;
  title: string;
  content: string;
  nickname: string;
  date: string;
  likes: number;
};

const Post: FC<PostProps> = ({ id, title, content, nickname, date, likes }) => {
  const showingLike = likes < 1000 ? likes.toString() : "999+";
  const [likeIsActive, setLikeIsActive] = useState<boolean>(false);

  if (title.length > 13) title = title.slice(0, 13) + "...";
  if (content.length > 55) content = content.slice(0, 55) + "...";

  const onClickLike = () => {
    setLikeIsActive((prevState) => !prevState);
    console.log(id);
  };

  return (
    <li className="w-full h-[150px] flex flex-col gap-3 bg-navy-800 border border-navy-700 rounded-lg px-4 pt-4 pb-2">
      <div className=" h-[86px] border-b border-navy-700 flex flex-col gap-2">
        <div className="flex flex-row justify-between">
          <h4 className="title4 text-navy-100">{title}</h4>
          <span className="caption2 text-navy-300">{date}</span>
        </div>
        <p className="caption2 text-navy-300 h-20">{content}</p>
      </div>
      <div className="flex flex-row justify-between">
        <div className="caption2 text-navy-300">{nickname}</div>
        <div className="flex flex-row items-center caption1 text-navy-100 transition-all duration-1000">
          <HearIcon isActive={likeIsActive} onClick={onClickLike} />
          <div className="pb-[1px]">{showingLike}</div>
        </div>
      </div>
    </li>
  );
};

export default Post;
