import { FC } from "react";

import CategoryNavigation from "./CategoryNavigation";
import MainHeader from "../layout/MainHeader";
import searchIcon from "../../assets/images/community/search.svg";

const CommunityHeader: FC<{ sort: string | undefined }> = ({ sort }) => {
  return (
    <div>
      <MainHeader title="커뮤니티" additionalClass="pl-4">
        <img src={searchIcon} className="mr-1" />
      </MainHeader>
      <CategoryNavigation sort={sort} />
    </div>
  );
};

export default CommunityHeader;
