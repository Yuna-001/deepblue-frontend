import { FC, useState } from "react";
import questionsData from "../assets/questions.json";
import { useNavigate } from "react-router-dom";

const QuestionPage: FC = () => {
  const navigate = useNavigate();
  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const { question, answers } = questionsData[questionIndex];

  const handelAnswerClick = (score: number) => {
    if (questionIndex === questionsData.length - 1) {
      navigate("/tutorial/nickname");
    } else {
      setQuestionIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <div>
      <h2>{question}</h2>
      <ul>
        {answers.map((answer, score) => (
          <li key={answer} onClick={() => handelAnswerClick(score)}>
            {answer}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionPage;
