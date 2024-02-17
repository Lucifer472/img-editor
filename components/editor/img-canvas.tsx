"use client";
import { useEffect } from "react";
import Image from "next/image";

import Draggable from "react-draggable";

import { useMainImg } from "@/states/main-img-state";
import { useImgPositing } from "@/states/position-state";

import { getLocalStorage, setLocalStorage } from "@/lib/storage";

export const ImgCanvas = () => {
  const img = useMainImg((set) => set.img);
  const [position, setPosition, scale, setScale] = useImgPositing((set) => [
    set.imgP,
    set.setImgP,
    set.imgS,
    set.setImgS,
  ]);

  useEffect(() => {
    const data = getLocalStorage("main-img-p");

    if (data) {
      const objectData = JSON.parse(data);
      setPosition(objectData.pos);
      setScale(objectData.scale);
    }
  }, []);

  const handleDrag = (e: any, ui: any) => {
    setPosition({ x: position.x + ui.deltaX, y: position.y + ui.deltaY });
  };

  useEffect(() => {
    const data = JSON.stringify({
      pos: position,
      scale: scale,
    });

    setLocalStorage("main-img-p", data);
  }, [position, scale]);

  return (
    <Draggable position={position} onDrag={handleDrag}>
      <Image
        src={img}
        alt="main img"
        fill
        className="object-cover object-center transition-none cursor-move"
        style={{
          scale: scale,
        }}
      />
    </Draggable>
  );
};
