"use client";
import { useCallback, useState, useTransition } from "react";
import toast from "react-hot-toast";
import { toPng } from "html-to-image";
import { CopyIcon, DownloadIcon } from "@radix-ui/react-icons";

import Logo from "@/components/logo";
import { ZoomDialer } from "@/components/navigation/zoom-dialer";

import { Button } from "@/components/ui/button";
import { DropDownMenu } from "@/components/navigation/dropdown-menu";
import { useDivState } from "@/states/div-state";

import { getLocalStorage, setLocalStorage } from "@/lib/storage";

import { updateTemplate } from "@/action/template";

export const Navbar = ({ templateName }: { templateName?: string }) => {
  const [isPending, startTransition] = useTransition();
  const divRef = useDivState((set) => set.div);

  const onButtonClick = useCallback(() => {
    if (divRef.current === null) {
      return;
    }
    const rect = divRef.current.getBoundingClientRect();

    console.log(rect);

    toPng(divRef.current, {
      cacheBust: false,
      includeQueryParams: true,
      quality: 0.2,
      canvasWidth: rect.width,
      canvasHeight: rect.height,
    }).then((dataUrl) => {
      const link = document.createElement("a");
      link.download = `${templateName}.png`;
      link.href = dataUrl;
      link.click();
    });
  }, [divRef, templateName]);

  const handleReset = () => {
    setLocalStorage("bubble", "");
    setLocalStorage("imgData", "");
    setLocalStorage("opt1", "");
    setLocalStorage("opt2", "");
    setLocalStorage("overlay", "");
    setLocalStorage("text", "");
    setLocalStorage("watermark", "");

    window.location.reload();
  };

  const handleSave = useCallback(() => {
    if (!divRef || divRef.current === null) {
      return toast.error("Something Went Wrong");
    }
    const rect = divRef.current.getBoundingClientRect();

    startTransition(() => {
      toPng(divRef.current, {
        cacheBust: false,
        includeQueryParams: true,
        quality: 0.5,
        canvasWidth: rect.width / 2,
        canvasHeight: rect.height / 2,
      }).then((dataUrl) => {
        fetch("https://img.missiongujarat.in/api/upload/buffer", {
          method: "POST",
          body: JSON.stringify({
            img: dataUrl,
            name: templateName,
          }),
        }).then((res) => {
          if (res.status === 200) {
            res.text().then((res) => {
              const bubble = getLocalStorage("bubble");
              const imgData = getLocalStorage("imgData");
              const opt1 = getLocalStorage("opt1");
              const opt2 = getLocalStorage("opt2");
              const overlay = getLocalStorage("overlay");
              const text = getLocalStorage("text");
              const watermark = getLocalStorage("watermark");
              if (templateName) {
                updateTemplate(
                  templateName,
                  // "default",
                  bubble as string,
                  imgData as string,
                  opt1 as string,
                  opt2 as string,
                  overlay as string,
                  text as string,
                  watermark as string,
                  res as string
                ).then((res) => {
                  if (res) {
                    toast.success("Saved Successfully");
                  } else {
                    toast.error("Failed to save the document");
                  }
                });
              }
            });
          } else {
            toast.error("something went wrong");
          }
        });
      });
    });
  }, [divRef, templateName]);

  return (
    <nav className="w-full max-h-20 py-2 px-8 border-b border-border flex items-center justify-between">
      <Logo />
      <ZoomDialer />
      <div className="flex items-center justify-end gap-x-2 h-20 pr-2">
        <Button
          onClick={handleSave}
          variant={"outline"}
          className="py-2 h-12 flex items-center justify-center gap-x-2"
          // disabled={true}
        >
          {isPending ? "Saving" : "Save Draft"}
        </Button>
        <Button
          className="py-2 h-12 flex items-center justify-center gap-x-2"
          variant={"outline"}
          onClick={handleReset}
        >
          <CopyIcon className="w-4 h-4" />
          <span className="font-medium text-sm">Reset</span>
        </Button>
        <Button
          onClick={onButtonClick}
          className="py-2 h-12 flex items-center justify-center gap-x-2"
          variant={"outline"}
        >
          <DownloadIcon className="w-4 h-4" />
          <span className="font-medium text-sm">Download</span>
        </Button>
        <DropDownMenu />
      </div>
    </nav>
  );
};
