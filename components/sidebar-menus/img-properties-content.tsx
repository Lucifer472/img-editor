"use client";
import { useEffect, useMemo, useState } from "react";
import { toast } from "react-hot-toast";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { PropertySlider } from "@/components/sidebar-menus/property-slider";
import Loader from "@/components/loader";

import {
  useCanvasBackColor,
  useCanvasProperties,
  useCanvasSize,
  useMainImg,
} from "@/states/main-img-state";
import { useImgPositing } from "@/states/position-state";

import { getLocalStorage, setLocalStorage } from "@/lib/storage";

export const ImgPropertyContent = () => {
  const [isPending, setPending] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [img, setImg] = useMainImg((s) => [s.img, s.setImg]);
  const [position, setPosition, scale, setScale] = useImgPositing((set) => [
    set.imgP,
    set.setImgP,
    set.imgS,
    set.setImgS,
  ]);

  const [width, setWidth, height, setHeight] = useCanvasSize((s) => [
    s.width,
    s.setWidth,
    s.height,
    s.setHeight,
  ]);

  const [bgColor, setBgColor] = useCanvasBackColor((s) => [
    s.color,
    s.setColor,
  ]);

  const [padding, round, shadow, setPadding, setRound, setShadow] =
    useCanvasProperties((s) => [
      s.padding,
      s.round,
      s.shadow,
      s.setPadding,
      s.setRound,
      s.setShadow,
    ]);

  useEffect(() => {
    const data = getLocalStorage("img-data");
    if (data) {
      const dataObject = JSON.parse(data);
      setBgColor(dataObject.bgColor);
      setImg(dataObject.img);
      setWidth(dataObject.width);
      setHeight(dataObject.height);
      setPadding(dataObject.padding);
      setRound(dataObject.round);
      setShadow(dataObject.shadow);
    }
    const data2 = getLocalStorage("main-img-p");

    if (data2) {
      const objectData = JSON.parse(data2);
      setPosition(objectData.pos);
      setScale(objectData.scale);
    }
  }, []);

  const formData = useMemo(() => {
    const data = new FormData();
    data.append("folder", "editor");
    if (file) {
      data.append("img", file);
    }
    return data;
  }, [file]);

  useEffect(() => {
    if (file) {
      setPending(true);
      fetch("https://img.missiongujarat.in/api/upload", {
        method: "POST",
        body: formData,
      }).then((res) => {
        if (res.ok) {
          res.text().then((res) => {
            setPending(false);
            toast.success("Img Set Successfully");
            setImg(res);
          });
        } else {
          setPending(false);
          toast.error("Something Went Wrong");
        }
      });
    }
    setPending(false);
  }, [file, formData, setImg]);

  const handleX = (v: number) => {
    setPosition({ x: v, y: position.y });
  };
  const handleY = (v: number) => {
    setPosition({ x: position.x, y: v });
  };

  useEffect(() => {
    const data = JSON.stringify({
      img: img,
      width: width,
      height: height,
      bgColor: bgColor,
      padding: padding,
      round: round,
      shadow: shadow,
    });

    setLocalStorage("img-data", data);

    const data2 = JSON.stringify({
      pos: position,
      scale: scale,
    });

    setLocalStorage("main-img-p", data2);
  }, [img, width, height, bgColor, padding, round, shadow, position, scale]);

  return (
    <div className="w-full flex flex-col gap-y-8">
      <Loader isOpen={isPending} />
      <input
        type="file"
        accept="image/*"
        className="hidden"
        id="main-img"
        onChange={(e: any) => setFile(e.target.files?.[0])}
      />
      <Label
        htmlFor="main-img"
        className="w-full min-h-32 bg-sky-100 cursor-pointer flex items-center justify-center text-muted-foreground rounded-md border-2 border-dashed border-sky-300"
      >
        Click Here to Upload Img
      </Label>
      <div className="flex items-center justify-between w-full">
        <div className="flex flex-col items-start">
          <span className="text-sm font-medium">Card Background</span>
          <span className="text-sm text-muted-foreground">{bgColor}</span>
        </div>
        <Input
          type="color"
          value={bgColor}
          onChange={(e) => setBgColor(e.target.value)}
          className="rounded-full p-0 border-4 h-10 w-10 bg-white cursor-pointer disabled:pointer-events-none ring-offset-background [&::-webkit-color-swatch]:rounded-full
        [&::-moz-color-swatch]:rounded-full [&::-webkit-color-swatch]:border-0
        [&::-moz-color-swatch]:border-0 [&::-webkit-color-swatch-wrapper]:p-0"
        />
      </div>
      <div className="flex items-center justify-between w-full gap-2 flex-wrap ">
        <Button
          variant={"outline"}
          onClick={() => {
            setHeight(1000);
            setWidth(1000);
          }}
        >
          Square
        </Button>
        <Button
          variant={"outline"}
          onClick={() => {
            setHeight(1440);
            setWidth(810);
          }}
        >
          Story
        </Button>
        <Button
          variant={"outline"}
          onClick={() => {
            setHeight(720);
            setWidth(1280);
          }}
        >
          Tumb
        </Button>
      </div>
      <PropertySlider
        max={1440}
        label="Width"
        setValue={setWidth}
        value={width}
      />
      <PropertySlider
        max={1440}
        label="Height"
        setValue={setHeight}
        value={height}
      />
      <PropertySlider
        max={1440}
        min={-1440}
        steps={10}
        label="X Axis"
        setValue={handleX}
        value={position.x}
      />
      <PropertySlider
        max={1440}
        min={-1440}
        steps={10}
        label="Y Axis"
        setValue={handleY}
        value={position.y}
      />
      <PropertySlider
        max={2}
        min={0.1}
        label="Scale"
        steps={0.1}
        setValue={setScale}
        value={scale}
      />
      <PropertySlider
        max={100}
        min={0}
        label="Padding"
        setValue={setPadding}
        value={padding}
      />
      <PropertySlider
        max={100}
        min={0}
        label="Roundness"
        setValue={setRound}
        value={round}
      />
      <PropertySlider
        max={100}
        min={0}
        label="Card Shadow"
        setValue={setShadow}
        value={shadow}
      />
    </div>
  );
};
