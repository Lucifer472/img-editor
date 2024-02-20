"use client";

import { create } from "zustand";

interface useOptionsType {
  prop: boolean;
  setProp: () => void;
  img: string;
  setImg: (s: string) => void;
  imgP: { x: number; y: number };
  imgS: number;
  imgR: number;
  setImgP: (o: { x: number; y: number }) => void;
  setImgS: (v: number) => void;
  setImgR: (v: number) => void;
  color: string;
  setColor: (s: string) => void;
}

export const usePropsState1 = create<useOptionsType>((set) => ({
  prop: false,
  setProp: () => set((state) => ({ prop: !state.prop })),
  img: "1.png",
  setImg: (s) => set({ img: s }),
  imgP: { x: 0, y: 0 },
  imgS: 1,
  imgR: 0,
  setImgP: (o) => set({ imgP: o }),
  setImgS: (v) => set({ imgS: v }),
  setImgR: (v) => set({ imgR: v }),
  color: "#000000",
  setColor: (s) => set({ color: s }),
}));

export const usePropsState2 = create<useOptionsType>((set) => ({
  prop: false,
  setProp: () => set((state) => ({ prop: !state.prop })),
  img: "2.png",
  setImg: (s) => set({ img: s }),
  imgP: { x: 0, y: 0 },
  imgS: 1,
  imgR: 0,
  setImgP: (o) => set({ imgP: o }),
  setImgS: (v) => set({ imgS: v }),
  setImgR: (v) => set({ imgR: v }),
  color: "#000000",
  setColor: (s) => set({ color: s }),
}));
