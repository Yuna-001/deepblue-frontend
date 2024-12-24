import { FC } from "react";

import CommunityCategoryButton from "../buttons/CommunityCategoryButton";

const CategoryNavigation: FC<{ sort: string | undefined }> = ({ sort }) => {
  return (
    <nav className="w-full h-12 px-4 border-b border-navy-700  flex flex-row justify-around items-end">
      <CommunityCategoryButton category="all" sort={sort} text="전체" />
      <CommunityCategoryButton category="free" sort={sort} text="자유" />
      <CommunityCategoryButton category="worry" sort={sort} text="고민" />
      <CommunityCategoryButton category="career" sort={sort} text="취업/진로" />
    </nav>
  );
};

export default CategoryNavigation;
