import { FC } from "react";
import { useNavigate, useParams } from "react-router-dom";

import questionsData from "../../assets/data/questions.json";
import Answer from "../../components/buttons/Answer";
import OnboardingLayout from "../../components/layout/OnboardingLayout";

import question1Img from "../../assets/images/onboarding/question1.svg";
import question2Img from "../../assets/images/onboarding/question2.svg";
import question3Img from "../../assets/images/onboarding/question3.svg";
import useSurveyScoreStore from "../../store/surveyScore";

const IMAGE_LIST = [question1Img, question2Img, question3Img];

// 뒤로 가기하면 점수를 리셋시키거나 필요한 만큼 빼는 로직 필요
const QuestionPage: FC = () => {
  const navigate = useNavigate();
  const { questionIndex } = useParams();
  let questionIdx: number;

  if (questionIndex === undefined) questionIdx = 0;
  else questionIdx = +questionIndex;

  const increaseSurveyScore = useSurveyScoreStore(
    (state) => state.increaseSurveyScore,
  );

  const { question, answers } = questionsData[questionIdx];

  const handleAnswerClick = (point: number) => {
    increaseSurveyScore(point);
    if (questionIdx < questionsData.length - 1) {
      navigate(`/tutorial/questions/${questionIdx + 1}`);
    } else {
      navigate("/tutorial/nickname-setting");
    }
  };

  return (
    <OnboardingLayout withBackArrow>
      <div className="w-full flex flex-col items-center gap-7 pt-7">
        <img src={IMAGE_LIST[questionIdx]} />
        <h2 className="title3 h-16 py-auto text-navy-100 whitespace-pre-line text-center">
          {question}
        </h2>
      </div>
      <ul className="w-full flex flex-col gap-3 mt-3">
        {answers.map((answer, point) => (
          <Answer
            key={answer}
            text={answer}
            onClick={() => handleAnswerClick(point)}
          />
        ))}
      </ul>
    </OnboardingLayout>
  );
};

export default QuestionPage;
