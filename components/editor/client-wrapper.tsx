"use client";

import { ReactNode, useEffect, useState } from "react";
import { Template } from "@prisma/client";

import { setLocalStorage } from "@/lib/storage";

interface ClientWrapperProps {
  children: ReactNode;
  projectData: Template;
}

const ClientWrapper = ({ children, projectData }: ClientWrapperProps) => {
  const [render, setRender] = useState(false);

  useEffect(() => {
    setLocalStorage("bubble", projectData.bubble as string);
    setLocalStorage("imgData", projectData.imgData as string);
    setLocalStorage("opt1", projectData.opt1 as string);
    setLocalStorage("opt2", projectData.opt2 as string);
    setLocalStorage("overlay", projectData.overlay as string);
    setLocalStorage("text", projectData.text as string);
    setLocalStorage("watermark", projectData.watermark as string);
    setLocalStorage("projectId", projectData.id);

    setRender(true);
  }, []);

  if (!render) return null;

  return <>{children}</>;
};
export default ClientWrapper;

// {"visible":false,"size":0,"roundness":0,"borderWidth":0,"borderColor":"#ffffff","img":"/bubble-placeholder.png","pos":{"x":0,"y":0}}
// {"visible":false,"size":65,"roundness":84,"borderWidth":10,"borderColor":"#ffffff",
// "img":"https://img.missiongujarat.in/i/editor/17083244350141690301978330_kohli1.webp","pos":{"x":7,"y":397}}
