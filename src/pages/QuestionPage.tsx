import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";

import questionsData from "../assets/questions.json";
import Answer from "../components/buttons/Answer";
import PageLayout from "../components/layout/PageLayout";

const QuestionPage: FC = () => {
  const navigate = useNavigate();

  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const [hikikomoriScore, setHikikomoriScore] = useState<number>(0);

  const { question, answers } = questionsData[questionIndex];

  const handelAnswerClick = (point: number) => {
    setHikikomoriScore((pervScore) => pervScore + point);

    if (questionIndex === questionsData.length - 1) {
      const updatedScore = hikikomoriScore + point;

      // updatedScore를 백엔드로 전송

      navigate("/tutorial/nickname-setting");
    } else {
      setQuestionIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <PageLayout withBackArrow>
      <div className="w-full flex flex-col items-center gap-7 pt-7">
        <div className="w-20 h-20 bg-slate-100">로고 대신</div>
        <h2 className="title3 h-16 py-auto text-navy-100 whitespace-pre-line text-center">
          {question}
        </h2>
      </div>
      <ul className="w-full flex flex-col gap-3 my-5">
        {answers.map((answer, point) => (
          <Answer
            key={answer}
            text={answer}
            onClick={() => handelAnswerClick(point + 1)}
          />
        ))}
      </ul>
    </PageLayout>
  );
};

export default QuestionPage;
