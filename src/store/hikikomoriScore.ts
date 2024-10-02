import { create } from "zustand";

type Score = {
  score: number;
  increaseScore: (input: number) => void;
};

const useHikikomoriScoreStore = create<Score>((set) => ({
  score: 0,
  increaseScore: (point) => set((state) => ({ score: state.score + point })),
}));

export default useHikikomoriScoreStore;
