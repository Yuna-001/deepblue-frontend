import { FC, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";

import questionsData from "../../assets/data/questions.json";
import Answer from "../../components/buttons/Answer";
import OnboardingLayout from "../../components/layout/OnboardingLayout";

import question1Img from "../../assets/images/onboarding/question1.svg";
import question2Img from "../../assets/images/onboarding/question2.svg";
import question3Img from "../../assets/images/onboarding/question3.svg";
import useSurveyScoreStore from "../../store/surveyScore";

const QuestionPage: FC = () => {
  const navigate = useNavigate();

  const imgList = useMemo(() => [question1Img, question2Img, question3Img], []);

  const [questionIndex, setQuestionIndex] = useState<number>(0);

  const { question, answers } = useMemo(
    () => questionsData[questionIndex],
    [questionIndex],
  );

  const { initializeSurveyScore, increaseSurveyScore } = useSurveyScoreStore(
    (state) => ({
      initializeSurveyScore: state.initializeSurveyScore,
      increaseSurveyScore: state.increaseSurveyScore,
    }),
  );

  if (questionIndex === 0) {
    initializeSurveyScore();
  }

  const handelAnswerClick = (point: number) => {
    increaseSurveyScore(point);

    if (questionIndex < questionsData.length - 2) {
      setQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      navigate("/tutorial/nickname-setting");
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
            onClick={() => handelAnswerClick(point)}
          />
        ))}
      </ul>
    </OnboardingLayout>
  );
};

export default QuestionPage;
