"use client";
import Image from "next/image";

import { useOverlayStates } from "@/states/overlay-state";
import { useTextStates } from "@/states/text-state";
import { useWatermark } from "@/states/watermark-state";
import { usePropsState1, usePropsState2 } from "@/states/options-state";

import { manipulateColor } from "@/lib/color-change";
import { cn } from "@/lib/utils";

export const OverlayCanvas = () => {
  const [visible, solid, bgColor, height] = useOverlayStates((set) => [
    set.visible,
    set.solid,
    set.bgColor,
    set.height,
  ]);

  return (
    <div
      className="w-full absolute bottom-0"
      style={{
        width: `100%`,
        background: solid
          ? `${bgColor}`
          : `linear-gradient(0deg, ${bgColor}, ${bgColor}, transparent ${height}%)`,
        height: `${height}%`,
        display: visible ? "block" : "none",
      }}
    ></div>
  );
};

export const TextCanvas = () => {
  const [
    text,
    textAlign,
    textWeight,
    fontFamily,
    fontSize,
    spacing,
    line,
    visible,
    top,
  ] = useTextStates((set) => [
    set.text,
    set.textAlign,
    set.textWeight,
    set.fontFamily,
    set.fontSize,
    set.spacing,
    set.line,
    set.visible,
    set.top,
  ]);

  const align = ["left", "center", "right"];
  const weight = ["lighter", "normal", "bold", "bolder"];

  return (
    <p
      className={cn(
        "text-white z-50 whitespace-pre-line bottom-10 inset-x-16",
        visible ? "absolute" : "hidden"
      )}
      style={{
        transform: `translateY(${-top}px)`,
        textAlign: align[parseInt(textAlign as any)] as any,
        fontWeight: weight[parseInt(textWeight as any)] as any,
        fontSize: `${fontSize}px`,
        letterSpacing: `${spacing}rem`,
        lineHeight: `${line * 10}px`,
        fontFamily: `${fontFamily},sans-serif`,
      }}
      dangerouslySetInnerHTML={{ __html: text }}
    ></p>
  );
};

export const WaterMarkCanvas = () => {
  const [
    visible,
    img,
    post,
    bgColor,
    borderWidth,
    borderColor,
    borderRadius,
    size,
    corners,
  ] = useWatermark((set) => [
    set.visible,
    set.img,
    set.post,
    set.bgColor,
    set.borderWidth,
    set.borderColor,
    set.roundness,
    set.size,
    set.corners,
  ]);

  return (
    <div
      className={cn(
        "z-[99]",
        visible ? "absolute" : "hidden",
        corners === "top-left" && "top-2 left-2",
        corners === "top-right" && "top-2 right-2",
        corners === "bottom-left" && "bottom-2 left-2",
        corners === "bottom-right" && "bottom-2 right-2"
      )}
    >
      <div
        className="w-full h-full relative"
        style={{
          transform: `translate(${post.x}px,${post.y}px)`,
        }}
      >
        <Image
          src={img}
          alt="Watermark"
          width={size}
          height={size}
          className={cn(
            `absolute object-contain`,
            corners === "top-left" && "top-0 left-0",
            corners === "top-right" && "top-0 right-0",
            corners === "bottom-left" && "bottom-0 left-0",
            corners === "bottom-right" && "bottom-0 right-0"
          )}
          style={{
            backgroundColor: bgColor,
            borderWidth: `${borderWidth}px`,
            borderColor: borderColor,
            borderRadius: `${borderRadius}%`,
            minWidth: `${size}px`,
            minHeight: `${size}px`,
          }}
        />
      </div>
    </div>
  );
};

export const Options1Canvas = () => {
  const [img, scale, rotate, positing, prop, color] = usePropsState1((set) => [
    set.img,
    set.imgS,
    set.imgR,
    set.imgP,
    set.prop,
    set.color,
  ]);

  const filter = manipulateColor(color).filter;

  return (
    <div className={prop ? "absolute" : "hidden"}>
      <Image
        src={"/options/" + img}
        alt="Img"
        width={1440}
        height={1440}
        className="object-cover"
        style={{
          scale: scale,
          rotate: `${rotate}deg`,
          transform: `translate(${positing.x}px,${positing.y}px)`,
          filter: filter,
        }}
      />
    </div>
  );
};

export const Options2Canvas = () => {
  const [img, scale, rotate, positing, prop, color] = usePropsState2((set) => [
    set.img,
    set.imgS,
    set.imgR,
    set.imgP,
    set.prop,
    set.color,
  ]);
  const filter = manipulateColor(color).filter;

  return (
    <div className={prop ? "absolute" : "hidden"}>
      <Image
        src={"/options/" + img}
        alt="Img"
        width={1440}
        height={1440}
        className="object-cover"
        style={{
          scale: scale,
          rotate: `${rotate}deg`,
          transform: `translate(${positing.x}px,${positing.y}px)`,
          filter: filter,
        }}
      />
    </div>
  );
};
