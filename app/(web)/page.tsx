import { Poppins } from "next/font/google";

import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

const HomePage = () => {
  return (
    <div className="w-full bg-slate-100">
      <nav className="w-full h-20 flex items-center justify-between px-4 bg-white border-border border-b-2">
        <Logo />
        <div className="flex items-center justify-end gap-x-2">
          <Button variant={"outline"}>Login</Button>
          <Button variant={"outline"}>Contact Us</Button>
        </div>
      </nav>
      <section className="flex flex-col items-center justify-center w-full gap-y-4">
        <div className="w-full h-[400px] flex flex-col items-center justify-center gap-y-4">
          <h1 className={cn("text-5xl", poppins.className)}>
            Create Custom Facebook Post, 10x Faster
          </h1>
          <p className="text-center text-muted-foreground text-xl max-w-[600px]">
            Create stunning images with our easy-to-use image editor. Perfect
            for social media posts, blog images, and more.
          </p>
          <div className="flex items-center justify-center gap-x-4 mt-8">
            <Link
              href={"/editor"}
              className="w-[200px] h-[50px] flex items-center justify-center bg-sky-500 hover:bg-sky-600 text-white text-xl rounded-md shadow-md hover:shadow-none"
            >
              Get Started Now
            </Link>
            <Link
              href={"/contact-us"}
              className="w-[200px] h-[50px] flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white text-xl rounded-md shadow-md hover:shadow-none"
            >
              Contact Us
            </Link>
          </div>
        </div>
        <div className="w-full my-24 max-w-7xl mx-auto grid grid-cols-2 items-center justify-center">
          <div className="w-full h-full relative">
            <Image
              src="/home.png"
              alt="Home Image"
              fill
              className="object-contain"
            />
          </div>
          <div className="w-full flex flex-col items-start gap-y-4">
            <h2 className="text-xl font-light text-sky-500">Create</h2>
            <p className={cn("text-2xl", poppins.className)}>
              Bring your Design to Life.
            </p>
            <div className="w-full flex items-start flex-col gap-y-6 mt-6">
              <p>
                <span className={cn("text-lg", poppins.className)}>
                  Start quickly
                </span>{" "}
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
        </div>{" "}
        <div className="w-full my-24 max-w-7xl mx-auto grid grid-cols-2 items-center justify-center">
          <div className="w-full flex flex-col items-end gap-y-4">
            <h2 className="text-xl font-light text-sky-500">Create</h2>
            <p className={cn("text-2xl w-full", poppins.className)}>
              Bring your Design to Life.
            </p>
            <div className="w-full flex items-end flex-col gap-y-6 mt-6">
              <p>
                <span className={cn("text-lg", poppins.className)}>
                  Start quickly
                </span>{" "}
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
          <div className="w-full h-full relative">
            <Image
              src="/home.png"
              alt="Home Image"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
