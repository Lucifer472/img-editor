"use client";

import { useState } from "react";

import { Poppins } from "next/font/google";
import { ChevronDownIcon } from "@radix-ui/react-icons";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import { cn } from "@/lib/utils";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

interface PropertyProps {
  label: string;
  children: React.ReactNode;
}

export const Property: React.FC<PropertyProps> = ({ label, children }) => {
  const [active, setIsActive] = useState(false);

  return (
    <Collapsible defaultOpen={true}>
      <CollapsibleTrigger
        onClick={() => setIsActive(!active)}
        className={cn(
          "w-full bg-white p-4 border border-border  shadow-sm flex items-start justify-between",
          active ? "rounded-t-md" : "rounded-md"
        )}
      >
        <span className={cn("font-[600]", poppins.className)}>{label}</span>
        <ChevronDownIcon
          className={cn(
            "h-7 w-7 text-black p-1 bg-sky-50 rounded-full border border-border transition-transform duration-300",
            active ? "-rotate-180" : "rotate-0"
          )}
        />
      </CollapsibleTrigger>
      <CollapsibleContent
        className={
          "px-4 py-4 bg-white border-b border-x border-border rounded-b-md w-full CollapsibleContent"
        }
      >
        {children}
      </CollapsibleContent>
    </Collapsible>
  );
};
