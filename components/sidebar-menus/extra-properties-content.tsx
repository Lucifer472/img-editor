"use client";
import { useEffect } from "react";
import Image from "next/image";

import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

import { PropertySlider } from "@/components/sidebar-menus/property-slider";
import { ColorCard } from "@/components/sidebar-menus/color-card";

import { usePropsState1, usePropsState2 } from "@/states/options-state";
import { getLocalStorage, setLocalStorage } from "@/lib/storage";

const Prop1 = () => {
  const [
    prop,
    setProp,
    img,
    setImg,
    position,
    rotation,
    scale,
    setPosition,
    setRotation,
    setScale,
    color,
    setColor,
  ] = usePropsState1((set) => [
    set.prop,
    set.setProp,
    set.img,
    set.setImg,
    set.imgP,
    set.imgR,
    set.imgS,
    set.setImgP,
    set.setImgR,
    set.setImgS,
    set.color,
    set.setColor,
  ]);

  useEffect(() => {
    const data = getLocalStorage("opt1");

    if (data) {
      const dataObject = JSON.parse(data);
      if (dataObject.prop && !prop) {
        setProp();
      }
      setImg(dataObject.img);
      setPosition(dataObject.position);
      setRotation(dataObject.rotation);
      setScale(dataObject.scale);
      setColor(dataObject.color);
    }
  }, []);

  const handleX = (v: number) => {
    setPosition({ x: v, y: position.y });
  };
  const handleY = (v: number) => {
    setPosition({ x: position.x, y: v });
  };

  useEffect(() => {
    const data = JSON.stringify({
      prop,
      img,
      position,
      rotation,
      scale,
      color,
    });

    setLocalStorage("opt1", data);
  }, [prop, img, position, rotation, scale, color]);

  return (
    <>
      <div className="flex items-center justify-between w-full">
        <span className="text-muted-foreground">Visible</span>
        <Switch checked={prop} onClick={() => setProp()} />
      </div>
      {prop && (
        <>
          <div className="w-full flex flex-col items-start gap-y-2">
            <p>Select Embed:</p>
            <div className="grid grid-cols-3 w-full items-center justify-between gap-x-1 gap-y-2">
              <Label htmlFor="img1">
                <Input
                  type="radio"
                  className="hidden peer"
                  name="img"
                  id="img1"
                  onChange={() => setImg("1.png")}
                  defaultChecked={img === "1.png"}
                />
                <div className="border-2 border-border w-20 h-20 flex items-center justify-center cursor-pointer hover:border-sky-300 peer-checked:border-sky-400">
                  <Image
                    src={"/options/1.png"}
                    alt="Img 1"
                    width={100}
                    height={100}
                  />
                </div>
              </Label>
              <Label htmlFor="img2">
                <Input
                  type="radio"
                  className="hidden peer"
                  id="img2"
                  name="img"
                  onChange={() => setImg("2.png")}
                  defaultChecked={img === "2.png"}
                />
                <div className="border-2 border-border w-20 h-20 flex items-center justify-center cursor-pointer hover:border-sky-300 peer-checked:border-sky-400">
                  <Image
                    src={"/options/2.png"}
                    alt="Img 2"
                    width={100}
                    height={100}
                  />
                </div>
              </Label>
              <Label htmlFor="img3">
                <Input
                  type="radio"
                  className="hidden peer"
                  id="img3"
                  name="img"
                  onChange={() => setImg("3.png")}
                  defaultChecked={img === "3.png"}
                />
                <div className="border-2 border-border w-20 h-20 flex items-center justify-center cursor-pointer hover:border-sky-300 peer-checked:border-sky-400">
                  <Image
                    src={"/options/3.png"}
                    alt="Img 3"
                    width={100}
                    height={100}
                  />
                </div>
              </Label>
              <Label htmlFor="img4">
                <Input
                  type="radio"
                  className="hidden peer"
                  name="img"
                  id="img4"
                  onChange={() => setImg("4.png")}
                  defaultChecked={img === "4.png"}
                />
                <div className="border-2 border-border w-20 h-20 flex items-center justify-center cursor-pointer hover:border-sky-300 peer-checked:border-sky-400">
                  <Image
                    src={"/options/4.png"}
                    alt="Img 4"
                    width={100}
                    height={100}
                  />
                </div>
              </Label>
              <Label htmlFor="img5">
                <Input
                  type="radio"
                  className="hidden peer"
                  id="img5"
                  name="img"
                  onChange={() => setImg("5.png")}
                  defaultChecked={img === "5.png"}
                />
                <div className="border-2 border-border w-20 h-20 flex items-center justify-center cursor-pointer hover:border-sky-300 peer-checked:border-sky-400">
                  <Image
                    src={"/options/5.png"}
                    alt="Img 5"
                    width={100}
                    height={100}
                  />
                </div>
              </Label>
              <Label htmlFor="img6">
                <Input
                  type="radio"
                  className="hidden peer"
                  id="img6"
                  name="img"
                  onChange={() => setImg("6.png")}
                  defaultChecked={img === "6.png"}
                />
                <div className="border-2 border-border w-20 h-20 flex items-center justify-center cursor-pointer hover:border-sky-300 peer-checked:border-sky-400">
                  <Image
                    src={"/options/6.png"}
                    alt="Img 6"
                    width={100}
                    height={100}
                  />
                </div>
              </Label>
            </div>
          </div>
          <ColorCard label="Image Color" color={color} setColor={setColor} />
          <Separator className="w-full" />
          <PropertySlider
            max={2500}
            min={-2500}
            steps={10}
            label="X Axis"
            setValue={handleX}
            value={position.x}
          />
          <PropertySlider
            max={2500}
            min={-2500}
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
            max={360}
            min={0}
            label="Rotation"
            steps={5}
            setValue={setRotation}
            value={rotation}
          />
        </>
      )}
    </>
  );
};

const Prop2 = () => {
  const [
    prop,
    setProp,
    img,
    setImg,
    position,
    rotation,
    scale,
    setPosition,
    setRotation,
    setScale,
    color,
    setColor,
  ] = usePropsState2((set) => [
    set.prop,
    set.setProp,
    set.img,
    set.setImg,
    set.imgP,
    set.imgR,
    set.imgS,
    set.setImgP,
    set.setImgR,
    set.setImgS,
    set.color,
    set.setColor,
  ]);

  useEffect(() => {
    const data = getLocalStorage("opt2");

    if (data) {
      const dataObject = JSON.parse(data);
      if (dataObject.prop && !prop) {
        setProp();
      }
      setImg(dataObject.img);
      setPosition(dataObject.position);
      setRotation(dataObject.rotation);
      setScale(dataObject.scale);
      setColor(dataObject.color);
    }
  }, []);

  const handleX = (v: number) => {
    setPosition({ x: v, y: position.y });
  };
  const handleY = (v: number) => {
    setPosition({ x: position.x, y: v });
  };

  useEffect(() => {
    const data = JSON.stringify({
      prop,
      img,
      position,
      rotation,
      scale,
      color,
    });

    setLocalStorage("opt2", data);
  }, [prop, img, position, rotation, scale, color]);

  return (
    <>
      <div className="flex items-center justify-between w-full">
        <span className="text-muted-foreground">Visible</span>
        <Switch checked={prop} onClick={() => setProp()} />
      </div>
      {prop && (
        <>
          <div className="w-full flex flex-col items-start gap-y-2">
            <p>Select Embed:</p>
            <div className="grid grid-cols-3 w-full items-center justify-between gap-x-1 gap-y-2">
              <Label htmlFor="img-1">
                <Input
                  type="radio"
                  className="hidden peer"
                  name="secondImg"
                  id="img-1"
                  onChange={() => setImg("1.png")}
                  defaultChecked={img === "1.png"}
                />
                <div className="border-2 border-border w-20 h-20 flex items-center justify-center cursor-pointer hover:border-sky-300 peer-checked:border-sky-400">
                  <Image
                    src={"/options/1.png"}
                    alt="Img 1"
                    width={100}
                    height={100}
                  />
                </div>
              </Label>
              <Label htmlFor="img-2">
                <Input
                  type="radio"
                  className="hidden peer"
                  id="img-2"
                  name="secondImg"
                  onChange={() => setImg("2.png")}
                  defaultChecked={img === "2.png"}
                />
                <div className="border-2 border-border w-20 h-20 flex items-center justify-center cursor-pointer hover:border-sky-300 peer-checked:border-sky-400">
                  <Image
                    src={"/options/2.png"}
                    alt="Img 2"
                    width={100}
                    height={100}
                  />
                </div>
              </Label>
              <Label htmlFor="img-3">
                <Input
                  type="radio"
                  className="hidden peer"
                  id="img-3"
                  name="secondImg"
                  onChange={() => setImg("3.png")}
                  defaultChecked={img === "3.png"}
                />
                <div className="border-2 border-border w-20 h-20 flex items-center justify-center cursor-pointer hover:border-sky-300 peer-checked:border-sky-400">
                  <Image
                    src={"/options/3.png"}
                    alt="Img 3"
                    width={100}
                    height={100}
                  />
                </div>
              </Label>
              <Label htmlFor="img-4">
                <Input
                  type="radio"
                  className="hidden peer"
                  name="secondImg"
                  id="img-4"
                  onChange={() => setImg("4.png")}
                  defaultChecked={img === "4.png"}
                />
                <div className="border-2 border-border w-20 h-20 flex items-center justify-center cursor-pointer hover:border-sky-300 peer-checked:border-sky-400">
                  <Image
                    src={"/options/4.png"}
                    alt="Img 4"
                    width={100}
                    height={100}
                  />
                </div>
              </Label>
              <Label htmlFor="img-5">
                <Input
                  type="radio"
                  className="hidden peer"
                  id="img-5"
                  name="secondImg"
                  onChange={() => setImg("5.png")}
                  defaultChecked={img === "5.png"}
                />
                <div className="border-2 border-border w-20 h-20 flex items-center justify-center cursor-pointer hover:border-sky-300 peer-checked:border-sky-400">
                  <Image
                    src={"/options/5.png"}
                    alt="Img 5"
                    width={100}
                    height={100}
                  />
                </div>
              </Label>
              <Label htmlFor="img-6">
                <Input
                  type="radio"
                  className="hidden peer"
                  id="img-6"
                  name="secondImg"
                  onChange={() => setImg("6.png")}
                  defaultChecked={img === "6.png"}
                />
                <div className="border-2 border-border w-20 h-20 flex items-center justify-center cursor-pointer hover:border-sky-300 peer-checked:border-sky-400">
                  <Image
                    src={"/options/6.png"}
                    alt="Img 6"
                    width={100}
                    height={100}
                  />
                </div>
              </Label>
            </div>
          </div>
          <ColorCard label="Image Color" color={color} setColor={setColor} />
          <Separator className="w-full" />
          <PropertySlider
            max={2500}
            min={-2500}
            steps={10}
            label="X Axis"
            setValue={handleX}
            value={position.x}
          />
          <PropertySlider
            max={2500}
            min={-2500}
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
            max={360}
            min={0}
            label="Rotation"
            steps={5}
            setValue={setRotation}
            value={rotation}
          />
        </>
      )}
    </>
  );
};

export const ExtraPropertiesContent = () => {
  return (
    <div className="w-full flex flex-col gap-y-4">
      <Prop1 />
      <Separator className="w-full" />
      <Prop2 />
    </div>
  );
};
