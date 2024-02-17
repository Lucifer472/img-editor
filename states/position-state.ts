import { create } from "zustand";

interface useImgPositingType {
  imgP: { x: number; y: number };
  imgS: number;
  bubbleP: { x: number; y: number };
  setImgP: (o: { x: number; y: number }) => void;
  setBubbleP: (o: { x: number; y: number }) => void;
  setImgS: (v: number) => void;
}

export const useImgPositing = create<useImgPositingType>((set) => ({
  imgP: { x: 0, y: 0 },
  imgS: 1,
  bubbleP: { x: 0, y: 0 },
  setImgP: (o) => set({ imgP: o }),
  setBubbleP: (o) => set({ bubbleP: o }),
  setImgS: (v) => set({ imgS: v }),
}));
