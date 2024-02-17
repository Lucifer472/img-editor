import { create } from "zustand";

interface UseOverlayStatesTypes {
  visible: boolean;
  solid: boolean;
  bgColor: string;
  height: number;
  setVisible: () => void;
  setSolid: () => void;
  setBgColor: (v: string) => void;
  setHeight: (v: number) => void;
}

export const useOverlayStates = create<UseOverlayStatesTypes>((set) => ({
  visible: false,
  solid: false,
  bgColor: "#000000",
  height: 1,
  setVisible: () => set((state) => ({ visible: !state.visible })),
  setSolid: () =>
    set((state: { solid: boolean }) => ({
      solid: !state.solid,
    })),
  setBgColor: (v: string) => set({ bgColor: v }),
  setHeight: (v: number) =>
    set((state) => ({ height: v >= 0 && v < 101 ? v : state.height })),
}));
