"use client";

import { create } from "zustand";

export enum TextAlign {
  Left,
  Center,
  Right,
}

export enum FontWeight {
  Light,
  Regular,
  Semibold,
  Bold,
}

export enum FontFamily {
  Poppins,
  Inter,
  Roboto,
}

interface useTextStatesTypes {
  visible: boolean;
  setVisible: () => void;
  text: string;
  setText: (s: string) => void;
  textColor: string;
  setTextColor: (s: string) => void;
  fontSize: number;
  setFontSize: (v: number) => void;
  spacing: number;
  setSpacing: (v: number) => void;
  line: number;
  setLine: (v: number) => void;
  top: number;
  setTop: (v: number) => void;
  textAlign: TextAlign;
  setTextAlign: (s: TextAlign) => void;
  textWeight: FontWeight;
  setTextWeight: (s: FontWeight) => void;
  fontFamily: FontFamily;
  setFontFamily: (s: FontFamily) => void;
}

export const useTextStates = create<useTextStatesTypes>((set) => ({
  visible: false,
  setVisible: () => set((state) => ({ visible: !state.visible })),
  text: "",
  setText: (s) => set({ text: s }),
  textColor: "#ffffff",
  setTextColor: (s) => set({ textColor: s }),
  fontSize: 12,
  setFontSize: (v) => set({ fontSize: v }),
  spacing: 1,
  setSpacing: (v) => set({ spacing: v }),
  line: 0,
  setLine: (v) => set({ line: v }),
  top: 0,
  setTop: (v: number) => set({ top: v }),
  textAlign: TextAlign.Left,
  setTextAlign: (s) => set({ textAlign: s }),
  textWeight: FontWeight.Regular,
  setTextWeight: (s) => set({ textWeight: s }),
  fontFamily: FontFamily.Inter,
  setFontFamily: (s) => set({ fontFamily: s }),
}));
