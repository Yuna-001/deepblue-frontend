import { create } from "zustand";

type SurveyScoreStore = {
  surveyScores: Array<number>;
  setSurveyScore: (idx: number, score: number) => void;
};

const useSurveyScoreStore = create<SurveyScoreStore>((set) => ({
  surveyScores: [0, 0, 0],
  setSurveyScore: (idx, score) =>
    set((state) => ({
      surveyScores: state.surveyScores.map((prevScore, i) =>
        i === idx ? score : prevScore,
      ),
    })),
}));

export default useSurveyScoreStore;
