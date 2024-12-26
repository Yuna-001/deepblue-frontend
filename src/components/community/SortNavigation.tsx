import { FC } from "react";

import CommunitySortButton from "../buttons/CommunitySortButton";
import ClockIcon from "../icons/ClockIcon";
import ThumbsUpIcon from "../icons/ThumbsUpIcon";

const SortNavigation: FC<{ category: string | undefined }> = ({ category }) => {
  return (
    <nav className="w-full flex flex-row justify-start gap-2 my-5">
      <CommunitySortButton category={category} sort="realtime">
        <ClockIcon />
        <div className="body2">실시간</div>
      </CommunitySortButton>
      <CommunitySortButton category={category} sort="best">
        <ThumbsUpIcon />
        <div className="body2">BEST</div>
      </CommunitySortButton>
    </nav>
  );
};

export default SortNavigation;
