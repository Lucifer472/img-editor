import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const handleNumberInput = (e: any) => {
  // Allow only numeric values, backspace, and arrow keys
  const isValidKey =
    /^\d$/.test(e.key) ||
    e.key === "Backspace" ||
    e.key === "ArrowLeft" ||
    e.key === "ArrowRight" ||
    e.key === "Delete";

  if (!isValidKey) {
    e.preventDefault();
  }
};
