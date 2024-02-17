"use client";
import { useEffect } from "react";
import Draggable from "react-draggable";
import Image from "next/image";

import { useBubbleState } from "@/states/bubble-state";
import { useImgPositing } from "@/states/position-state";

import { getLocalStorage, setLocalStorage } from "@/lib/storage";
import { cn } from "@/lib/utils";

export const BubbleCanvas = () => {
  const [img, visible, size, color, width, round] = useBubbleState((set) => [
    set.img,
    set.visible,
    set.size,
    set.borderColor,
    set.borderWidth,
    set.roundness,
  ]);

  const [position, setPosition] = useImgPositing((set) => [
    set.bubbleP,
    set.setBubbleP,
  ]);

  useEffect(() => {
    const data = getLocalStorage("main-img-b");

    if (data) {
      const objectData = JSON.parse(data);
      setPosition(objectData.pos);
    }
  }, []);

  const handleDrag = (e: any, ui: any) => {
    setPosition({
      x: position.x + ui.deltaX,
      y: position.y + ui.deltaY,
    });
  };

  useEffect(() => {
    const data = JSON.stringify({
      pos: position,
    });

    setLocalStorage("main-img-b", data);
  }, [position]);

  return (
    <Draggable position={position} onDrag={handleDrag}>
      <div
        className={cn(
          "z-50 top-0 left-0 overflow-hidden cursor-move",
          visible ? "relative" : "hidden"
        )}
        style={{
          top: `${position.y}px`,
          left: `${position.x}px`,
          width: `${size * 5}px`,
          height: `${size * 5}px`,
          borderColor: color,
          borderWidth: `${width}px`,
          borderRadius: `${round}%`,
        }}
      >
        <Image
          src={img}
          alt="Bubble Image"
          fill
          className="object-cover object-center"
        />
      </div>
    </Draggable>
  );
};
