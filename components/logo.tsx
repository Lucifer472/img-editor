import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700"],
});

const Logo = () => {
  return (
    <Link
      href={"/"}
      className="relative w-full max-w-44 flex flex-col items-start gap-y-1"
    >
      <p className="max-h-[32px] p-2 text-xs bg-sky-500 text-white rounded-sm text-center font-semibold">
        ENTERPRISE
      </p>
      <h2 className={cn("text-xl font-[700] uppercase", poppins.className)}>
        Image Creator
      </h2>
    </Link>
  );
};

export default Logo;
