"use client";
import { useCallback, useTransition } from "react";
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

    toPng(divRef.current, {
      cacheBust: false,
      includeQueryParams: true,
      quality: 1,
    }).then((dataUrl) => {
      const link = document.createElement("a");
      link.download = "img-name.png";
      link.href = dataUrl;
      link.click();
    });
  }, [divRef]);

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

  const handleSave = () => {
    const bubble = getLocalStorage("bubble");
    const imgData = getLocalStorage("imgData");
    const opt1 = getLocalStorage("opt1");
    const opt2 = getLocalStorage("opt2");
    const overlay = getLocalStorage("overlay");
    const text = getLocalStorage("text");
    const watermark = getLocalStorage("watermark");

    startTransition(() => {
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
          watermark as string
        ).then((res) => {
          if (res) {
            toast.success("Saved Successfully");
          } else {
            toast.error("Failed to save the document");
          }
        });
      }
    });
  };

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
