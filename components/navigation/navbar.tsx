"use client";
import { useCallback } from "react";
import { toPng } from "html-to-image";
import { CopyIcon, DownloadIcon } from "@radix-ui/react-icons";

import Logo from "@/components/logo";
import { ZoomDialer } from "@/components/navigation/zoom-dialer";

import { Button } from "@/components/ui/button";
import { DropDownMenu } from "@/components/navigation/dropdown-menu";
import { useDivState } from "@/states/div-state";
import { setLocalStorage } from "@/lib/storage";

import { useRouter } from "next/navigation";

export const Navbar = () => {
  const divRef = useDivState((set) => set.div);
  const router = useRouter();

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
    setLocalStorage("img-data", "");
    setLocalStorage("main-img-b", "");
    setLocalStorage("main-img-p", "");
    setLocalStorage("opt-1", "");
    setLocalStorage("opt-2", "");
    setLocalStorage("overlay", "");
    setLocalStorage("text", "");
    setLocalStorage("watermark", "");

    window.location.reload();
  };

  return (
    <nav className="w-full max-h-20 py-2 px-8 border-b border-border flex items-center justify-between">
      <Logo />
      <ZoomDialer />
      <div className="flex items-center justify-end gap-x-2 h-20 pr-2">
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
