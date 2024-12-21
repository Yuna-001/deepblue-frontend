import { FC } from "react";
import { Navigate, useParams } from "react-router-dom";

const CommunityCategoryRedirect: FC = () => {
  const { category } = useParams();

  if (category !== "free" && category !== "worry" && category !== "career") {
    return <Navigate to={`/main/communication/all/realtime`} />;
  }

  return <Navigate to={`/main/communication/${category}/realtime`} />;
};

export default CommunityCategoryRedirect;
