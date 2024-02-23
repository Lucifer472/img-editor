"use client";
import { useEffect, useState } from "react";

import { PropertySlider } from "@/components/sidebar-menus/property-slider";

import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FontWeight, TextAlign, useTextStates } from "@/states/text-state";
import { getLocalStorage, setLocalStorage } from "@/lib/storage";
import { readLocalFonts } from "@/action/read-fonts";

export const TextPropertiesContent = () => {
  const [
    visible,
    setVisible,
    text,
    setText,
    color,
    setColor,
    fontSize,
    setFontSize,
    spacing,
    setSpacing,
    line,
    setLine,
    textAlign,
    setTextAlign,
    fontWeight,
    setFontWeight,
    fontFamily,
    setFontFamily,
    top,
    setTop,
  ] = useTextStates((s) => [
    s.visible,
    s.setVisible,
    s.text,
    s.setText,
    s.textColor,
    s.setTextColor,
    s.fontSize,
    s.setFontSize,
    s.spacing,
    s.setSpacing,
    s.line,
    s.setLine,
    s.textAlign,
    s.setTextAlign,
    s.textWeight,
    s.setTextWeight,
    s.fontFamily,
    s.setFontFamily,
    s.top,
    s.setTop,
  ]);
  const [selectedRange, setSelectedRange] = useState<{
    start: number;
    end: number;
  } | null>(null);
  const [fontFamilyArray, setFontFamilyArray] = useState<string[] | null>(null);

  useEffect(() => {
    const data = getLocalStorage("text");
    if (data) {
      const dataObject = JSON.parse(data);
      if (dataObject.visible && !visible) {
        setVisible();
      }
      setText(dataObject.text);
      setColor(dataObject.color);
      setFontSize(dataObject.fontSize);
      setFontFamily(dataObject.fontFamily);
      setFontWeight(dataObject.fontWeight);
      setLine(dataObject.line);
      setSpacing(dataObject.spacing);
      setTextAlign(dataObject.textAlign);
      setTop(dataObject.top);
    }
  }, []);

  useEffect(() => {
    readLocalFonts().then((res: any) => {
      setFontFamilyArray(res);
    });
  }, []);

  const handleSetColor = () => {
    if (selectedRange !== null) {
      const start = selectedRange.start;
      const end = selectedRange.end;
      const newText =
        text.substring(0, start) +
        `<span style="color:${color}">${text.substring(start, end)}</span>` +
        text.substring(end);
      setText(newText);
      setSelectedRange(null);
    }
  };

  const handleClearFormat = () => {
    const cleanedText = text.replace(
      /<span.*?>(.*?)<\/span>/g,
      (_match, content) => content
    );
    setText(cleanedText);
    setSelectedRange(null);
  };

  const handleTextSelection = (e: any) => {
    const start = e.target.selectionStart;
    const end = e.target.selectionEnd;
    setSelectedRange({ start, end });
  };

  const textAlignValues = Object.keys(TextAlign).filter(
    (key: any) => !isNaN(Number(TextAlign[key]))
  );
  const fontWeightValues = Object.keys(FontWeight).filter(
    (key: any) => !isNaN(Number(FontWeight[key]))
  );

  useEffect(() => {
    const data = JSON.stringify({
      visible: visible,
      text: text,
      color: color,
      fontSize: fontSize,
      spacing: spacing,
      line: line,
      textAlign: textAlign,
      fontWeight: fontWeight,
      fontFamily: fontFamily,
      top: top,
    });
    setLocalStorage("text", data);
  }, [
    visible,
    text,
    color,
    fontSize,
    spacing,
    line,
    textAlign,
    fontWeight,
    fontFamily,
    top,
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
          <Textarea
            className="min-h-16 resize-none"
            placeholder="Type Text here..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            onSelect={handleTextSelection}
          />
          <div className="flex items-center justify-between w-full gap-x-2">
            <Input
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="rounded-full p-0 border-4 h-10 w-10 bg-white cursor-pointer disabled:pointer-events-none ring-offset-background [&::-webkit-color-swatch]:rounded-full [&::-moz-color-swatch]:rounded-full [&::-webkit-color-swatch]:border-0 [&::-moz-color-swatch]:border-0 [&::-webkit-color-swatch-wrapper]:p-0"
            />
            <Button variant={"outline"} onClick={handleSetColor}>
              SET
            </Button>
            <Button variant={"outline"} onClick={handleClearFormat}>
              Clear Format
            </Button>
          </div>
          <Separator className="w-full" />
          <PropertySlider
            label="Font Size"
            max={100}
            setValue={setFontSize}
            value={fontSize}
          />
          <PropertySlider
            label="Letter Spacing"
            max={2}
            setValue={setSpacing}
            value={spacing}
            min={0.1}
            steps={0.1}
          />
          <PropertySlider
            label="Line Height"
            max={200}
            steps={1}
            setValue={setLine}
            value={line}
          />
          <PropertySlider
            label="Top Down"
            max={1440}
            steps={10}
            min={-1440}
            setValue={setTop}
            value={top}
          />
          <Separator className="w-full" />
          <div className="flex flex-col gap-y-1 w-full">
            <span>Text Align</span>
            <Select
              defaultValue={textAlign.toString()}
              onValueChange={(e: any) => setTextAlign(e)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Text Align" />
              </SelectTrigger>
              <SelectContent>
                {textAlignValues.map((t, index) => (
                  <SelectItem value={index.toString()} key={index}>
                    {t}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-y-1 w-full">
            <span>Font Weight</span>
            <Select
              defaultValue={fontWeight.toString()}
              onValueChange={(e: any) => setFontWeight(e)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Font Weight" />
              </SelectTrigger>
              <SelectContent>
                {fontWeightValues.map((t, index) => (
                  <SelectItem value={index.toString()} key={index}>
                    {t}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-y-1 w-full">
            <span>Font Family</span>
            <Select
              defaultValue={fontFamily}
              onValueChange={(e: any) => setFontFamily(e)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Font Family" />
              </SelectTrigger>
              <SelectContent>
                {fontFamilyArray &&
                  fontFamilyArray.map((t, index) => (
                    <SelectItem value={t} key={index}>
                      {t}
                    </SelectItem>
                  ))}
              </SelectContent>
            </Select>
          </div>
        </>
      )}
    </div>
  );
};
