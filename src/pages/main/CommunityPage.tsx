import { useParams } from "react-router-dom";

import MainPageLayout from "../../components/layout/MainPageLayout";
import PostList from "../../components/community/PostList";
import CategoryNavigation from "../../components/community/CategoryNavigation";
import SortNavigation from "../../components/community/SortNavigation";
import MainHeader from "../../components/layout/MainHeader";
import searchIcon from "../../assets/images/community/search.svg";

const CommunityPage = () => {
  const { category, sort } = useParams();

  return (
    <>
      <div>
        <MainHeader title="커뮤니티" additionalClass="pl-4">
          <img src={searchIcon} className="mr-1" />
        </MainHeader>
        <CategoryNavigation sort={sort} />
      </div>

      <MainPageLayout>
        <div className="h-full overflow-y-auto scrollbar-hidden pb-16">
          <div className="pb-16">
            <SortNavigation category={category} />
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
