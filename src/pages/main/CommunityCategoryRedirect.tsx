import { FC } from "react";
import { Navigate, useParams } from "react-router-dom";

const CommunityCategoryRedirect: FC = () => {
  const { category } = useParams();

  return <Navigate to={`/main/communication/${category}/realtime`} />;
};

export default CommunityCategoryRedirect;
