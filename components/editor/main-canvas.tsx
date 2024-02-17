"use client";

import { useEffect, useRef } from "react";
import {
  useCanvasBackColor,
  useCanvasProperties,
  useCanvasSize,
} from "@/states/main-img-state";
import { useZoomDialer } from "@/states/zoom-state";
import { useDivState } from "@/states/div-state";

import {
  Options1Canvas,
  Options2Canvas,
  OverlayCanvas,
  TextCanvas,
  WaterMarkCanvas,
} from "@/components/editor/canvas";
import { ImgCanvas } from "@/components/editor/img-canvas";
import { BubbleCanvas } from "@/components/editor/bubble-canvas";

export const MainCanvas = () => {
  const scale = useZoomDialer((set) => set.level);
  const bgColor = useCanvasBackColor((set) => set.color);
  const [width, height] = useCanvasSize((set) => [set.width, set.height]);
  const [padding, round, shadow] = useCanvasProperties((set) => [
    set.padding,
    set.round,
    set.shadow,
  ]);
  const setDiv = useDivState((set) => set.setDiv);

  const divRef = useRef(null);
  useEffect(() => {
    if (divRef) {
      setDiv(divRef as any);
    }
  }, [divRef, setDiv]);

  return (
    <>
      <div className="w-full h-full relative flex items-center justify-center overflow-hidden">
        <div
          className="border-4 border-border shadow-sm absolute"
          style={{ transform: `scale(${scale / 100})` }}
        >
          <div
            ref={divRef}
            className="relative"
            style={{
              backgroundColor: `${bgColor}`,
              width: `${width}px`,
              height: `${height}px`,
              padding: `${padding * 4}px`,
            }}
          >
            <div
              className="relative bg-pink-300 overflow-hidden w-full h-full"
              style={{
                borderRadius: `${round}%`,
                boxShadow: `0px 0px 15px 5px rgba(0,0,0,${shadow / 100})`,
              }}
            >
              <BubbleCanvas />
              <ImgCanvas />
              <OverlayCanvas />
              <TextCanvas />
              <WaterMarkCanvas />
              <Options1Canvas />
              <Options2Canvas />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
