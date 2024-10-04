import { FC } from "react";
import { useNavigate } from "react-router-dom";

import PageLayout from "../components/layout/PageLayout";
import Button from "../components/buttons/Button";
import greetingPolarImg from "../assets/images/onboarding/hi-polar.svg";

const GreetingPage: FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/tutorial/questions");
  };

  return (
    <PageLayout>
      <h3 className="title2 text-navy-100">폴라가 인사</h3>
      <img src={greetingPolarImg} />
      <Button onClick={handleClick} isOnboarding>
        다음
      </Button>
    </PageLayout>
  );
};

export default GreetingPage;
