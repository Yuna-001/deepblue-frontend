import { create } from "zustand";

type User = {
  nickname: string;
  score: number;
  setNickname: (input: string) => void;
  increaseScore: (input: number) => void;
};

const useUserStore = create<User>((set) => ({
  nickname: "",
  score: 0,
  setNickname: (nickname) => set({ nickname }),
  increaseScore: (points) => set((state) => ({ score: state.score + points })),
}));

export default useUserStore;
