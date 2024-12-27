import { Navigate, Outlet, useParams } from "react-router-dom";

const VALID_CATEGORIES = ["all", "free", "worry", "career"];
const VALID_SORTS = ["realtime", "best"];

const CategorySortRedirect = () => {
  const { category, sort } = useParams();

  const validCategory = VALID_CATEGORIES.includes(category ?? "")
    ? category
    : "all";
  const validSort = VALID_SORTS.includes(sort ?? "") ? sort : "realtime";

  if (category !== validCategory || sort !== validSort) {
    return (
      <Navigate to={`/main/communication/${validCategory}/${validSort}`} />
    );
  }

  return <Outlet />;
};

export default CategorySortRedirect;
