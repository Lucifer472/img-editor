import { create } from "zustand";

interface useWatermarkType {
  visible: boolean;
  setVisible: () => void;
  img: string;
  setImg: (v: string) => void;
  post: { x: number; y: number };
  setPost: (o: { x: number; y: number }) => void;
  bgColor: string;
  setBgColor: (v: string) => void;
  borderColor: string;
  setBorderColor: (s: string) => void;
  roundness: number;
  setRoundnes: (v: number) => void;
  borderWidth: number;
  setBorderWidth: (v: number) => void;
  size: number;
  setSize: (v: number) => void;
  corners: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  setCorners: (
    s: "top-left" | "top-right" | "bottom-left" | "bottom-right"
  ) => void;
}

export const useWatermark = create<useWatermarkType>((set) => ({
  visible: false,
  setVisible: () => set((state) => ({ visible: !state.visible })),
  img: "/dummy-logo.png",
  setImg: (s) => set({ img: s }),
  post: { x: 0, y: 0 },
  setPost: (o) => set({ post: o, corners: "top-left" }),
  bgColor: "transparent",
  setBgColor: (v) => set({ bgColor: v }),
  borderColor: "#ffffff",
  setBorderColor: (s) => set({ borderColor: s }),
  roundness: 0,
  setRoundnes: (v) => set({ roundness: v }),
  borderWidth: 0,
  setBorderWidth: (v) => set({ borderWidth: v }),
  size: 100,
  setSize: (v) => set({ size: v }),
  corners: "top-left",
  setCorners: (s) => set({ corners: s, post: { x: 0, y: 0 } }),
}));
