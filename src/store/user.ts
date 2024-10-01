import { create } from "zustand";

type User = {
  nickname: string;
  score: number;
  setNickname: (input: string) => void;
  setScore: (input: number) => void;
};

const useUserStore = create<User>((set) => ({
  nickname: "",
  score: 0,
  setNickname: (inputNickname) => set({ nickname: inputNickname }),
  setScore: (inputScore) => set({ score: inputScore }),
}));

export default useUserStore;
