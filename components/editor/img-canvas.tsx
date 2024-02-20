"use client";
import { useEffect } from "react";
import Image from "next/image";

import Draggable from "react-draggable";

import { useCanvasProperties, useMainImg } from "@/states/main-img-state";
import { useImgPositing } from "@/states/position-state";

import { cn } from "@/lib/utils";

export const ImgCanvas = () => {
  const img = useMainImg((set) => set.img);
  const [position, setPosition, scale, setScale] = useImgPositing((set) => [
    set.imgP,
    set.setImgP,
    set.imgS,
    set.setImgS,
  ]);

  const cover = useCanvasProperties((set) => set.cover);

  const handleDrag = (e: any, ui: any) => {
    setPosition({ x: position.x + ui.deltaX, y: position.y + ui.deltaY });
  };

  return (
    <Draggable position={position} onDrag={handleDrag}>
      <Image
        src={img}
        alt="main img"
        fill
        className={cn(
          "object-center transition-none cursor-move",
          cover ? "object-cover" : "object-contain"
        )}
        style={{
          scale: scale,
        }}
      />
    </Draggable>
  );
};
