import { FC } from "react";
import { useNavigate } from "react-router-dom";

import OnboardingLayout from "../components/layout/OnboardingLayout";
import Button from "../components/buttons/Button";

const IntroPage: FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/auth");
  };

  return (
    <OnboardingLayout>
      <h3 className="title2 text-navy-100">앱 소개 이미지</h3>
      <Button onClick={handleClick} isOnboarding>
        다음
      </Button>
    </OnboardingLayout>
  );
};

export default IntroPage;
