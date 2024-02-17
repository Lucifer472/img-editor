"use client";

import { useEffect } from "react";
import { PropertySlider } from "@/components/sidebar-menus/property-slider";

import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

import { useOverlayStates } from "@/states/overlay-state";
import { getLocalStorage, setLocalStorage } from "@/lib/storage";

export const OverlayPropertyContent = () => {
  const [
    visible,
    setVisible,
    solid,
    setSolid,
    bgColor,
    setBgColor,
    height,
    setHeight,
  ] = useOverlayStates((s) => [
    s.visible,
    s.setVisible,
    s.solid,
    s.setSolid,
    s.bgColor,
    s.setBgColor,
    s.height,
    s.setHeight,
  ]);

  useEffect(() => {
    const data = getLocalStorage("overlay");
    if (data) {
      const dataObject = JSON.parse(data);
      if (dataObject.visible && !visible) {
        setVisible();
      }
      if (dataObject.solid && !solid) {
        setSolid();
      }
      setBgColor(dataObject.bgColor);
      setHeight(dataObject.height);
    }
  }, []);

  useEffect(() => {
    const data = JSON.stringify({
      visible: visible,
      solid: solid,
      bgColor: bgColor,
      height: height,
    });
    setLocalStorage("overlay", data);
  }, [visible, solid, bgColor, height]);

  return (
    <div className="w-full flex flex-col gap-y-4">
      <div className="flex items-center justify-between w-full">
        <span className="text-muted-foreground">Visible</span>
        <Switch checked={visible} onClick={() => setVisible()} />
      </div>
      <Separator className="w-full" />
      <div className="flex items-center justify-between w-full">
        <span className="text-muted-foreground">Solid</span>
        <Switch checked={solid} onClick={() => setSolid()} />
      </div>
      <Separator className="w-full" />
      <div className="flex items-center justify-between w-full">
        <div className="flex flex-col items-start">
          <span className="text-sm text-muted-foreground">Background</span>
          <span className="text-sm text-muted-foreground">{bgColor}</span>
        </div>
        <Input
          type="color"
          value={bgColor}
          onChange={(e) => setBgColor(e.target.value)}
          className="flex border-input text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed [&::-webkit-color-swatch]:rounded-full [&::-moz-color-swatch]:rounded-full [&::-webkit-color-swatch]:border-0 [&::-moz-color-swatch]:border-0 [&::-webkit-color-swatch-wrapper]:p-0 rounded-full p-0 border-4 h-10 w-10 bg-white cursor-pointer disabled:opacity-50 disabled:pointer-events-none"
        />
      </div>
      <Separator className="w-full" />
      <PropertySlider
        label="Height"
        max={100}
        min={0}
        setValue={setHeight}
        value={height}
      />
    </div>
  );
};
