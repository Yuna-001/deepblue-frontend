import { FC } from "react";
import { useParams } from "react-router-dom";

import Header from "../../components/layout/Header";
import searchIcon from "../../assets/images/community/search.svg";
import MainPageLayout from "../../components/layout/MainPageLayout";
import PostList from "../../components/community/PostList";
import CommunitySortButton from "../../components/buttons/CommunitySortButton";
import ClockIcon from "../../components/icons/ClockIcon";
import ThumbsUpIcon from "../../components/icons/ThumbsUpIcon";
import CategoryNavigation from "../../components/community/CategoryNavigation";

const CommunityPage: FC = () => {
  const { category, sort } = useParams();

  return (
    <>
      <div>
        <Header>
          <h1 className="title3 text-navy-100 pl-4">커뮤니티</h1>
          <img src={searchIcon} className="mr-1" />
        </Header>
        <CategoryNavigation sort={sort} />
      </div>

      <MainPageLayout>
        <div className="h-full overflow-y-auto scrollbar-hidden pb-16">
          <div className="pb-16">
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

            <div className="my-5 flex flex-col">
              <PostList />
            </div>
          </div>
        </div>
      </MainPageLayout>
    </>
  );
};

export default CommunityPage;
