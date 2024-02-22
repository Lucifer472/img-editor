import { Poppins } from "next/font/google";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import {
  CheckCircledIcon,
  StarFilledIcon,
  StarIcon,
} from "@radix-ui/react-icons";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600"],
});

export const Reviews = () => {
  return (
    <div className="w-full mt-2 mb-12 bg-bg">
      <h2
        className={cn(
          "w-full text-center font-[600] text-2xl",
          poppins.className
        )}
      >
        Testimonials
      </h2>
      <div className="max-w-[200px] mx-auto h-[1px] bg-black my-4"></div>
      <div className="max-w-7xl mx-auto w-full flex items-center justify-center gap-x-8">
        <div className="bg-white rounded-md shadow-md flex flex-col gap-y-2 w-full px-4 py-2">
          <div className="flex items-center w-full gap-x-2">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col w-full gap-y-1">
              <h2 className={cn("text-sm font-[500]", poppins.className)}>
                Arnav Jain
              </h2>
              <p className="text-muted-foreground text-xs flex items-center gap-x-1">
                June 19, March <CheckCircledIcon className="text-emerald-500" />
                <span className="text-emerald-500"> Verified User</span>
              </p>
            </div>
          </div>
          <div className="flex items-center justify-start gap-x-1">
            <StarFilledIcon className="w-5 h-5 text-yellow-400" />
            <StarFilledIcon className="w-5 h-5 text-yellow-400" />
            <StarFilledIcon className="w-5 h-5 text-yellow-400" />
            <StarFilledIcon className="w-5 h-5 text-yellow-400" />
            <StarIcon className="w-5 h-5 text-yellow-400" />
            <p className={cn("ml-2 font-[600]", poppins.className)}>
              Awesome Product
            </p>
          </div>
          <p className="text-justify text-gray-700 font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            dolores dolorum quos nihil rerum explicabo quod quaerat
            exercitationem asperiores, veniam vitae sint, voluptatibus nobis
            enim porro modi tenetur dolor quia.
          </p>
        </div>
        <div className="bg-white rounded-md shadow-md flex flex-col gap-y-2 w-full px-4 py-2">
          <div className="flex items-center w-full gap-x-2">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col w-full gap-y-1">
              <h2 className={cn("text-sm font-[500]", poppins.className)}>
                Arnav Jain
              </h2>
              <p className="text-muted-foreground text-xs flex items-center gap-x-1">
                June 19, March <CheckCircledIcon className="text-emerald-500" />
                <span className="text-emerald-500"> Verified User</span>
              </p>
            </div>
          </div>
          <div className="flex items-center justify-start gap-x-1">
            <StarFilledIcon className="w-5 h-5 text-yellow-400" />
            <StarFilledIcon className="w-5 h-5 text-yellow-400" />
            <StarFilledIcon className="w-5 h-5 text-yellow-400" />
            <StarFilledIcon className="w-5 h-5 text-yellow-400" />
            <StarIcon className="w-5 h-5 text-yellow-400" />
            <p className={cn("ml-2 font-[600]", poppins.className)}>
              Awesome Product
            </p>
          </div>
          <p className="text-justify text-gray-700 font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            dolores dolorum quos nihil rerum explicabo quod quaerat
            exercitationem asperiores, veniam vitae sint, voluptatibus nobis
            enim porro modi tenetur dolor quia.
          </p>
        </div>
        <div className="bg-white rounded-md shadow-md flex flex-col gap-y-2 w-full px-4 py-2">
          <div className="flex items-center w-full gap-x-2">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col w-full gap-y-1">
              <h2 className={cn("text-sm font-[500]", poppins.className)}>
                Arnav Jain
              </h2>
              <p className="text-muted-foreground text-xs flex items-center gap-x-1">
                June 19, March <CheckCircledIcon className="text-emerald-500" />
                <span className="text-emerald-500"> Verified User</span>
              </p>
            </div>
          </div>
          <div className="flex items-center justify-start gap-x-1">
            <StarFilledIcon className="w-5 h-5 text-yellow-400" />
            <StarFilledIcon className="w-5 h-5 text-yellow-400" />
            <StarFilledIcon className="w-5 h-5 text-yellow-400" />
            <StarFilledIcon className="w-5 h-5 text-yellow-400" />
            <StarIcon className="w-5 h-5 text-yellow-400" />
            <p className={cn("ml-2 font-[600]", poppins.className)}>
              Awesome Product
            </p>
          </div>
          <p className="text-justify text-gray-700 font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            dolores dolorum quos nihil rerum explicabo quod quaerat
            exercitationem asperiores, veniam vitae sint, voluptatibus nobis
            enim porro modi tenetur dolor quia.
          </p>
        </div>
      </div>
    </div>
  );
};
