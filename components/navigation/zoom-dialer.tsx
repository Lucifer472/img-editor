"use client";
import { ZoomInIcon, ZoomOutIcon } from "@radix-ui/react-icons";

import { useZoomDialer } from "@/states/zoom-state";

import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

export const ZoomDialer = () => {
  const levels = useZoomDialer((state) => state.level);

  const increseLevels = useZoomDialer((state) => state.increseLevels);
  const decreseLevels = useZoomDialer((state) => state.decreseLevels);

  const setLevels = useZoomDialer((state) => state.setLevels);

  const handleSliderChange = (newValue: number) => {
    setLevels(newValue);
  };

  return (
    <div className="max-w-80 px-4 py-2 border-slate-200 border rounded-full flex items-center justify-between gap-x-4">
      <div className="flex items-center justify-between gap-x-2">
        <Button
          variant={"ghost"}
          disabled={levels === 1}
          onClick={decreseLevels}
          className="p-0 bg-transparent hover:bg-transparent"
        >
          <ZoomOutIcon className="w-8 h-8 text-gray-500" />
        </Button>
        <div className="w-32">
          <Slider
            defaultValue={[levels]}
            value={[levels]}
            min={1}
            max={100}
            step={1}
            onValueChange={(v) => handleSliderChange(v[0])}
          />
        </div>
        <Button
          variant={"ghost"}
          disabled={levels === 100}
          onClick={increseLevels}
          className="p-0 bg-transparent hover:bg-transparent"
        >
          <ZoomInIcon className="w-8 h-8 text-gray-500" />
        </Button>
      </div>
      <span className="text-lg w-12">{levels}%</span>
    </div>
  );
};
