import { FC } from "react";
import { useNavigate } from "react-router-dom";

import PageLayout from "../components/layout/PageLayout";
import Button from "../components/buttons/Button";

const IntroPage: FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/auth");
  };

  return (
    <PageLayout>
      <h3 className="title2 text-navy-100">앱 소개 이미지</h3>
      <Button onClick={handleClick} isOnboarding>
        다음
      </Button>
    </PageLayout>
  );
};

export default IntroPage;
