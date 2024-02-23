"use client";

import { useEffect } from "react";
import { PropertySlider } from "@/components/sidebar-menus/property-slider";
import { ColorCard } from "@/components/sidebar-menus/color-card";

import { Switch } from "@/components/ui/switch";
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
    <div className="w-full flex flex-col gap-y-2">
      <div className="flex items-center justify-between w-full">
        <span className="text-muted-foreground">Visible</span>
        <Switch checked={visible} onClick={() => setVisible()} />
        <span className="text-muted-foreground">Solid</span>
        <Switch checked={solid} onClick={() => setSolid()} />
      </div>
      <Separator className="w-full" />
      <ColorCard color={bgColor} label="Background" setColor={setBgColor} />
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
