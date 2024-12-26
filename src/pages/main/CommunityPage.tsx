import { useParams } from "react-router-dom";

import MainPageLayout from "../../components/layout/MainPageLayout";
import PostList from "../../components/community/PostList";
import CategoryNavigation from "../../components/community/CategoryNavigation";
import SortNavigation from "../../components/community/SortNavigation";
import CommunityHeader from "../../components/community/CommunityHeader";

const CommunityPage = () => {
  const { category, sort } = useParams();

  return (
    <>
      <div>
        <CommunityHeader />
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
