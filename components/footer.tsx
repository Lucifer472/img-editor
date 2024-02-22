import { Poppins } from "next/font/google";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

const Footer = () => {
  return (
    <footer className="w-full h-40 flex flex-col items-center justify-center gap-y-4 bg-white border-t-2 border-border">
      <div className="flex items-center justify-center gap-x-4">
        <Button variant={"link"} asChild>
          <Link href={"/terms"}>Terms & Condition</Link>
        </Button>
        <Button variant={"link"} asChild>
          <Link href={"/policy"}>Privacy Policy</Link>
        </Button>
        <Button variant={"link"} asChild>
          <Link href={"/contact-us"}>Contact Us</Link>
        </Button>
        <Button variant={"link"} asChild>
          <Link href={"/pricing"}>Pricing</Link>
        </Button>
      </div>
      <p className={cn("text-sm text-center leading-6", poppins.className)}>
        Made in Bharat 🇮🇳 with Love ❤️ by <br />
        <Button
          variant={"link"}
          className="inline-block px-1 underline"
          asChild
        >
          <Link href={"https://truepubmedia.com"} target="_blank">
            True Pub Media{" "}
          </Link>
        </Button>
        Private Limited.
      </p>
    </footer>
  );
};

export default Footer;
