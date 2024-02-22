import Image from "next/image";

import { cn } from "@/lib/utils";

interface DetailsCardProps {
  isRight?: boolean;
  img: string;
  bg?: boolean;
  children: React.ReactNode;
}

export const DetailsCard = ({
  isRight = false,
  img,
  bg,
  children,
}: DetailsCardProps) => {
  return (
    <div className={cn("w-full h-ful py-16", bg && "bg-white")}>
      <div
        className={cn(
          "w-full max-w-7xl mx-auto items-center justify-center",
          isRight ? "flex" : "flex flex-row-reverse"
        )}
      >
        {children}
        <div className="w-full min-h-[300px] relative">
          <Image src={img} alt="Home Image" fill className="object-contain" />
        </div>
      </div>
    </div>
  );
};
