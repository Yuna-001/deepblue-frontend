import { FC } from "react";
import { useNavigate } from "react-router-dom";

import PageLayout from "../components/layout/PageLayout";
import Button from "../components/buttons/Button";
import questListImg from "../assets/images/onboarding/quest-illust.svg";

const GuidePage: FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/main/home");
  };

  return (
    <PageLayout>
      <h3 className="title2 text-navy-100">
        지금부터 '폴라'가 당신에게 딱 맞는 퀘스트를 준비했어요.
      </h3>
      <img src={questListImg} />
      <Button onClick={handleClick} isOnboarding>
        다음
      </Button>
    </PageLayout>
  );
};

export default GuidePage;
