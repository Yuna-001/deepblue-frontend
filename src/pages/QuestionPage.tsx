import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";

import questionsData from "../assets/data/questions.json";
import Answer from "../components/buttons/Answer";
import OnboardingLayout from "../components/layout/OnboardingLayout";

import question1Img from "../assets/images/onboarding/question1.svg";
import question2Img from "../assets/images/onboarding/question2.svg";
import question3Img from "../assets/images/onboarding/question3.svg";

const QuestionPage: FC = () => {
  const navigate = useNavigate();

  const imgList = [question1Img, question2Img, question3Img];

  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const [hikikomoriScore, setHikikomoriScore] = useState<number>(0);

  const { question, answers } = questionsData[questionIndex];

  const handelAnswerClick = (point: number) => {
    setHikikomoriScore((pervScore) => pervScore + point);

    if (questionIndex === questionsData.length - 1) {
      const updatedScore = hikikomoriScore + point;

      // updatedScore를 백엔드로 전송
      console.log(updatedScore);

      navigate("/tutorial/nickname-setting");
    } else {
      setQuestionIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <OnboardingLayout withBackArrow>
      <div className="w-full flex flex-col items-center gap-7 pt-7">
        <img src={imgList[questionIndex]} />
        <h2 className="title3 h-16 py-auto text-navy-100 whitespace-pre-line text-center">
          {question}
        </h2>
      </div>
      <ul className="w-full flex flex-col gap-3 mt-3">
        {answers.map((answer, point) => (
          <Answer
            key={answer}
            text={answer}
            onClick={() => handelAnswerClick(point + 1)}
          />
        ))}
      </ul>
    </OnboardingLayout>
  );
};

export default QuestionPage;
