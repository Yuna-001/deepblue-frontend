import { FC } from "react";
import { useParams } from "react-router-dom";

import Header from "../../components/layout/Header";
import searchIcon from "../../assets/images/community/search.svg";
import MainPageLayout from "../../components/layout/MainPageLayout";
import PostList from "../../components/community/PostList";
import CommunityCategoryButton from "../../components/buttons/CommunityCategoryButton";
import CommunitySortButton from "../../components/buttons/CommunitySortButton";
import ClockIcon from "../../components/icons/ClockIcon";
import ThumbsUpIcon from "../../components/icons/ThumbsUpIcon";

const CommunityPage: FC = () => {
  const { category, sort } = useParams();

  return (
    <>
      <div>
        <Header>
          <h1 className="title3 text-navy-100 pl-4">커뮤니티</h1>
          <img src={searchIcon} className="mr-1" />
        </Header>

        <nav className="w-full h-12 px-4 border-b border-navy-700  flex flex-row justify-around items-end">
          <CommunityCategoryButton category="all" sort={sort} text="전체" />
          <CommunityCategoryButton category="free" sort={sort} text="자유" />
          <CommunityCategoryButton category="worry" sort={sort} text="고민" />
          <CommunityCategoryButton
            category="career"
            sort={sort}
            text="취업/진로"
          />
        </nav>
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
