"use client";
import { useEffect, useState } from "react";

import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";

import { handleNumberInput } from "@/lib/utils";

interface PropertySliderProps {
  label: string;
  value: number;
  setValue: (v: number) => void;
  max: number;
  min?: number;
  steps?: number;
}

export const PropertySlider = ({
  label,
  value,
  setValue,
  max,
  min,
  steps,
}: PropertySliderProps) => {
  const [inputValue, setInputValue] = useState(value);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const handleChange = (e: any) => {
    const input = parseInt(e.target.value);
    if (isNaN(input)) return;

    if (min !== undefined) {
      if (input <= max && input >= min) {
        setValue(input);
      }
    } else {
      if (input <= max && input >= 1) {
        setValue(input);
      }
    }

    return;
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-col items-start gap-y-2 w-full pr-4">
        <span>{label}</span>
        <Slider
          min={min !== undefined ? min : 1}
          max={max}
          step={steps ? steps : 1}
          defaultValue={[value]}
          value={[value]}
          onValueChange={(v) => setValue(v[0])}
        />
      </div>
      <Input
        type="text"
        onKeyDown={handleNumberInput}
        onChange={handleChange}
        value={inputValue}
        className="w-16"
      />
    </div>
  );
};
