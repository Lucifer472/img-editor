import { Poppins } from "next/font/google";
import Image from "next/image";

import { cn } from "@/lib/utils";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

interface DetailsCardProps {
  isRight?: boolean;
  img: string;
  bg?: boolean;
}

export const DetailsCard = ({ isRight = false, img, bg }: DetailsCardProps) => {
  return (
    <div className={cn("w-full h-ful py-16", bg && "bg-white")}>
      <div
        className={cn(
          "w-full max-w-7xl mx-auto items-center justify-center",
          isRight ? "flex" : "flex flex-row-reverse"
        )}
      >
        <div
          className={cn(
            "w-full flex flex-col gap-y-4",
            isRight ? "items-end" : "items-start"
          )}
        >
          <h2 className="text-xl font-light text-sky-500">Create</h2>
          <p
            className={cn(
              "text-2xl w-full",
              poppins.className,
              isRight ? "text-right" : "text-left"
            )}
          >
            Bring your Design to Life.
          </p>
          <div
            className={cn(
              "w-full flex flex-col gap-y-6 mt-6",
              isRight ? "items-end" : "items-start"
            )}
          >
            <p>
              <span className={cn("text-lg", poppins.className)}>
                Start quickly
              </span>
              with Bits, Blocks and Examples to help you move fast.
            </p>
            <p>
              <span className={cn("text-lg", poppins.className)}>
                Customize every detail
              </span>{" "}
              with advanced properties, themes and custom code.
            </p>
            <p>
              <span className={cn("text-lg", poppins.className)}>
                Preview as you go
              </span>{" "}
              on your device, or on the web.
            </p>
            <p>
              <span className={cn("text-lg", poppins.className)}>
                Connect it up
              </span>{" "}
              by adding actions, interactions, navigation and live data.
            </p>
          </div>
        </div>
        <div className="w-full min-h-[300px] relative">
          <Image src={img} alt="Home Image" fill className="object-contain" />
        </div>
      </div>
    </div>
  );
};
