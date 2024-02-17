import { create } from "zustand";

interface useDivStateProp {
  div: any;
  setDiv: (ref: any) => void;
}

export const useDivState = create<useDivStateProp>((set) => ({
  div: null,
  setDiv: (ref) =>
    set({
      div: ref,
    }),
}));
