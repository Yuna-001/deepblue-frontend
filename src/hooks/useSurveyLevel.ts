import useSurveyScoreStore from "../store/surveyScore";

const useSurveyLevel = () => {
  const surveyScores = useSurveyScoreStore((state) => state.surveyScores);

  const calculateSurveyLevel = () => {
    const totalSurvveyScore = surveyScores.reduce(
      (total, score) => total + score,
      0,
    );

    if (totalSurvveyScore > 5) {
      return 1;
    }
    if (totalSurvveyScore > 2) {
      return 2;
    }

    return 3;
  };

  return { calculateSurveyLevel };
};

export default useSurveyLevel;
