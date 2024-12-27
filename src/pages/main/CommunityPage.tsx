import { useParams } from "react-router-dom";

import MainPageLayout from "../../components/layout/MainPageLayout";
import PostList from "../../components/community/PostList";
import SortNavigation from "../../components/community/SortNavigation";
import CommunityHeader from "../../components/community/CommuniityHeader";

const CommunityPage = () => {
  const { category, sort } = useParams();

  return (
    <>
      <CommunityHeader sort={sort} />
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
