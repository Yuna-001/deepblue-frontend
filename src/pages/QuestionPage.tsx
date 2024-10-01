import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";

import questionsData from "../assets/questions.json";
import useUserStore from "../store/user";

const QuestionPage: FC = () => {
  const navigate = useNavigate();

  const increaseScore = useUserStore((state) => state.increaseScore);

  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const { question, answers } = questionsData[questionIndex];

  const handelAnswerClick = (point: number) => {
    increaseScore(point);

    if (questionIndex === questionsData.length - 1) {
      navigate("/tutorial/nickname");
    }

    setQuestionIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <div>
      <h2>{question}</h2>
      <ul>
        {answers.map((answer, point) => (
          <li key={answer} onClick={() => handelAnswerClick(score)}>
            {answer}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionPage;
