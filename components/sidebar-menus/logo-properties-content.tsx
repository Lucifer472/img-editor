"use client";

import { useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";

import { useWatermark } from "@/states/watermark-state";
import { PropertySlider } from "@/components/sidebar-menus/property-slider";
import { ImgUploadBtn } from "@/components/sidebar-menus/img-upload-btn";
import { ColorCard } from "@/components/sidebar-menus/color-card";

import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { getLocalStorage, setLocalStorage } from "@/lib/storage";

export const LogoPropertiesContent = () => {
  const [isPending, setPending] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  const [
    visible,
    setVisible,
    img,
    setImg,
    bgColor,
    setBgColor,
    roundness,
    setRoundnes,
    borderWidth,
    setBorderWidth,
    borderColor,
    setBorderColor,
    post,
    setPost,
    size,
    setSize,
    corners,
    setCorners,
  ] = useWatermark((set) => [
    set.visible,
    set.setVisible,
    set.img,
    set.setImg,
    set.bgColor,
    set.setBgColor,
    set.roundness,
    set.setRoundnes,
    set.borderWidth,
    set.setBorderWidth,
    set.borderColor,
    set.setBorderColor,
    set.post,
    set.setPost,
    set.size,
    set.setSize,
    set.corners,
    set.setCorners,
  ]);

  useEffect(() => {
    const data = getLocalStorage("watermark");

    if (data) {
      const dataObject = JSON.parse(data);
      if (dataObject.visible && !visible) {
        setVisible();
      }
      setImg(dataObject.img);
      setBgColor(dataObject.bgColor);
      setRoundnes(dataObject.roundness);
      setBorderWidth(dataObject.borderWidth);
      setBorderColor(dataObject.borderColor);
      setPost(dataObject.post);
      setSize(dataObject.size);
      setCorners(dataObject.corners);
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

  const handleX = (x: number) => {
    setPost({
      x: x,
      y: post.y,
    });
  };
  const handleY = (y: number) => {
    setPost({
      x: post.x,
      y: y,
    });
  };

  useEffect(() => {
    const data = JSON.stringify({
      visible,
      img,
      bgColor,
      borderWidth,
      roundness,
      borderColor,
      post,
      size,
      corners,
    });

    setLocalStorage("watermark", data);
  }, [
    visible,
    img,
    bgColor,
    borderWidth,
    roundness,
    borderColor,
    post,
    size,
    corners,
  ]);

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
            label="Click here to upload Logo"
            id="watermark"
            isPending={isPending}
            setFile={setFile}
          />
          <ColorCard color={bgColor} label="Background" setColor={setBgColor} />
          <Button
            className="w-full"
            variant={"outline"}
            onClick={() => setBgColor("transparent")}
          >
            Remove Bg
          </Button>
          <Separator className="w-full" />
          <ColorCard
            color={borderColor}
            label="Border Color"
            setColor={setBorderColor}
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
          <div className="w-full grid grid-cols-2 gap-2">
            <Button
              className="w-full col-span-1"
              variant={"outline"}
              onClick={() => setCorners("top-left")}
            >
              Top Left
            </Button>
            <Button
              className="w-full col-span-1"
              variant={"outline"}
              onClick={() => setCorners("top-right")}
            >
              Top Right
            </Button>
            <Button
              className="w-full col-span-1"
              variant={"outline"}
              onClick={() => setCorners("bottom-left")}
            >
              Bottom Left
            </Button>
            <Button
              className="w-full col-span-1"
              variant={"outline"}
              onClick={() => setCorners("bottom-right")}
            >
              Bottom Right
            </Button>
          </div>
          <Separator className="w-full" />
          <PropertySlider
            label="X Axis"
            max={1440}
            min={-1440}
            setValue={handleX}
            value={post.x}
          />
          <PropertySlider
            label="Y Axis"
            max={1440}
            min={-1440}
            setValue={handleY}
            value={post.y}
          />
          <Separator className="w-full" />
          <PropertySlider
            label="Size"
            max={500}
            min={1}
            setValue={setSize}
            value={size}
          />
        </>
      )}
    </div>
  );
};
