import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";

import OnboardingLayout from "../../components/layout/OnboardingLayout";
import Button from "../../components/buttons/Button";

import appImg1 from "../../assets/images/intro/01.svg";
import appImg2 from "../../assets/images/intro/02.svg";
import appImg3 from "../../assets/images/intro/03.svg";

const TEXT_LIST = [
  "나에게 맞는 퀘스트를\n도전하고 기록해요.",
  "퀘스트를 완료하고\n리워드를 획득해요.",
  "익명으로 소통하고\n위로받아요.",
];

const APP_IMG_LIST = [appImg1, appImg2, appImg3];

const IntroPage: FC = () => {
  const navigate = useNavigate();

  const [index, setIndex] = useState<number>(0);

  const handleClick = () => {
    if (index < TEXT_LIST.length - 1) {
      setIndex((prevIdx) => prevIdx + 1);
    } else {
      navigate("/auth");
    }
  };

  return (
    <OnboardingLayout>
      <div className="flex flex-col items-center gap-3">
        <h3 className="title2 w-full text-navy-100 whitespace-pre-line text-center pb-2">
          {TEXT_LIST[index]}
        </h3>
        <img src={APP_IMG_LIST[index]} alt="앱 이미지" />
        <div className="flex flex-row gap-2">
          {Array.from({ length: 3 }).map((_, idx) => (
            <div
              key={idx}
              className={`h-2 w-2 rounded-full ${index === idx ? "bg-sky_blue-500" : "bg-sky_blue-800"}`}
            ></div>
          ))}
        </div>
      </div>
      <Button onClick={handleClick} isOnboarding>
        다음
      </Button>
    </OnboardingLayout>
  );
};

export default IntroPage;
