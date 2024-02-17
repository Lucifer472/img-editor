"use client";
import { create } from "zustand";

interface UseMainImgTypes {
  img: string;
  setImg: (v: string) => void;
}

export const useMainImg = create<UseMainImgTypes>((set) => ({
  img: "/img-placeholder.jpg",
  setImg: (v: string) => set({ img: v }),
}));

interface UseCanvasBackColorTypes {
  color: string;
  setColor: (v: string) => void;
}

export const useCanvasBackColor = create<UseCanvasBackColorTypes>((set) => ({
  color: "#ffffff",
  setColor: (v: string) => set({ color: v }),
}));

interface UseCanvasSizeTypes {
  width: number;
  height: number;
  setWidth: (v: number) => void;
  setHeight: (v: number) => void;
}

export const useCanvasSize = create<UseCanvasSizeTypes>((set) => ({
  width: 800,
  height: 800,
  setWidth: (v: number) => set({ width: v }),
  setHeight: (v: number) => set({ height: v }),
}));

interface UseCanvasPropertiesTypes {
  cover: boolean;
  setCover: (b: boolean) => void;
  padding: number;
  round: number;
  shadow: number;
  setPadding: (v: number) => void;
  setRound: (v: number) => void;
  setShadow: (v: number) => void;
}

export const useCanvasProperties = create<UseCanvasPropertiesTypes>((set) => ({
  cover: false,
  setCover: (b) => set({ cover: b }),
  padding: 0,
  round: 0,
  shadow: 0,
  setPadding: (v: number) => set({ padding: v }),
  setRound: (v: number) => set({ round: v }),
  setShadow: (v: number) => set({ shadow: v }),
}));
