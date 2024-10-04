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
      <div className="flex flex-col justify-center items-center h-full mb-24 gap-5">
        <h3 className="title3 text-navy-100 text-center">
          지금부터 '폴라'가 당신에게 딱 맞는
          <br /> 퀘스트를 준비했어요.
        </h3>
        <img src={questListImg} />
      </div>
      <Button onClick={handleClick} isOnboarding>
        시작
      </Button>
    </PageLayout>
  );
};

export default GuidePage;
