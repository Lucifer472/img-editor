"use client";
import { create } from "zustand";

interface useZoomDialerTypes {
  level: number;
  increseLevels: () => void;
  decreseLevels: () => void;
  setLevels: (v: number) => void;
  removeAllState: () => void;
}

export const useZoomDialer = create<useZoomDialerTypes>((set) => ({
  level: 50,
  increseLevels: () =>
    set((state: { level: number }) => ({
      level: state.level !== 100 ? state.level + 1 : state.level,
    })),
  decreseLevels: () =>
    set((state: { level: number }) => ({
      level: state.level !== 1 ? state.level - 1 : state.level,
    })),
  setLevels: (v: number) => set({ level: v }),
  removeAllState: () => set({ level: 50 }),
}));
