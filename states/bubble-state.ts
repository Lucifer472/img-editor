"use client";
import { create } from "zustand";

interface BubbleStateTypes {
  visible: boolean;
  setVisible: () => void;
  size: number;
  setSize: (v: number) => void;
  roundness: number;
  setRoundnes: (v: number) => void;
  borderWidth: number;
  setBorderWidth: (v: number) => void;
  borderColor: string;
  setBorderColor: (s: string) => void;
  img: string;
  setImg: (s: string) => void;
}

export const useBubbleState = create<BubbleStateTypes>((set) => ({
  visible: false,
  setVisible: () => set((state) => ({ visible: !state.visible })),
  size: 0,
  setSize: (v) => set({ size: v }),
  roundness: 0,
  setRoundnes: (v) => set({ roundness: v }),
  borderWidth: 0,
  setBorderWidth: (v) => set({ borderWidth: v }),
  borderColor: "#ffffff",
  setBorderColor: (s) => set({ borderColor: s }),
  img: "/bubble-placeholder.png",
  setImg: (s) => set({ img: s }),
}));
