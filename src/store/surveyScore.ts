import { create } from "zustand";

type SurveyScoreStore = {
  surveyScore: number;
  initializeSurveyScore: () => void;
  increaseSurveyScore: (point: number) => void;
};

const useSurveyScoreStore = create<SurveyScoreStore>((set) => ({
  surveyScore: 0,
  initializeSurveyScore: () => {
    set(() => ({ surveyScore: 0 }));
  },
  increaseSurveyScore: (point: number) =>
    set((state) => ({ surveyScore: state.surveyScore + point })),
}));

export default useSurveyScoreStore;
