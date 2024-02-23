"use client";

import { useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";

import { useBubbleState } from "@/states/bubble-state";
import { useImgPositing } from "@/states/position-state";

import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";

import { ImgUploadBtn } from "@/components/sidebar-menus/img-upload-btn";
import { ColorCard } from "@/components/sidebar-menus/color-card";
import { PropertySlider } from "@/components/sidebar-menus/property-slider";

import { getLocalStorage, setLocalStorage } from "@/lib/storage";

export const BubblePropertiesContent = () => {
  const [isPending, setPending] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [
    visible,
    setVisible,
    size,
    setSize,
    roundness,
    setRoundnes,
    borderWidth,
    setBorderWidth,
    borderColor,
    setBorderColor,
    img,
    setImg,
  ] = useBubbleState((s) => [
    s.visible,
    s.setVisible,
    s.size,
    s.setSize,
    s.roundness,
    s.setRoundnes,
    s.borderWidth,
    s.setBorderWidth,
    s.borderColor,
    s.setBorderColor,
    s.img,
    s.setImg,
  ]);

  const [position, setPosition] = useImgPositing((set) => [
    set.bubbleP,
    set.setBubbleP,
  ]);

  useEffect(() => {
    const data = getLocalStorage("bubble");
    if (data) {
      const dataObject = JSON.parse(data);
      if (dataObject.visible && !visible) {
        setVisible();
      }
      setSize(dataObject.size);
      setRoundnes(dataObject.roundness);
      setBorderWidth(dataObject.borderWidth);
      setBorderColor(dataObject.borderColor);
      setImg(dataObject.img);
      setPosition(dataObject.pos);
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
      visible: visible,
      size: size,
      roundness: roundness,
      borderWidth: borderWidth,
      borderColor: borderColor,
      img: img,
      pos: position,
    });

    setLocalStorage("bubble", data);
  }, [visible, size, roundness, borderWidth, borderColor, img, position]);

  return (
    <div className="w-full flex flex-col gap-y-4">
      <div className="flex items-center justify-between w-full">
        <span className="text-muted-foreground">Visible</span>
        <Switch checked={visible} onClick={() => setVisible()} />
      </div>
      {visible && (
        <>
          <Separator className="w-full" />
          <ImgUploadBtn
            id="bubble-img"
            isPending={isPending}
            label="Upload Bubble Image here"
            setFile={setFile}
          />
          <Separator className="w-full" />
          <PropertySlider
            label="X Axis"
            max={1440}
            min={-1440}
            steps={10}
            setValue={handleX}
            value={position.x}
          />
          <PropertySlider
            label="Y Axis"
            max={1440}
            min={-1440}
            steps={10}
            setValue={handleY}
            value={position.y}
          />
          <Separator className="w-full" />
          <PropertySlider
            label="Size"
            max={200}
            min={10}
            setValue={setSize}
            value={size}
          />
          <PropertySlider
            label="Roundness"
            max={100}
            min={0}
            setValue={setRoundnes}
            value={roundness}
          />
          <PropertySlider
            label="Border Width"
            max={100}
            min={0}
            setValue={setBorderWidth}
            value={borderWidth}
          />
          <Separator className="w-full" />
          <ColorCard
            color={borderColor}
            label="Border Color"
            setColor={setBorderColor}
          />
        </>
      )}
    </div>
  );
};
