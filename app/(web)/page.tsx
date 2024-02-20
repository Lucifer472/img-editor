import { Poppins } from "next/font/google";
import Link from "next/link";

import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import { DetailsCard } from "@/components/home/details-card";

import { cn } from "@/lib/utils";
import Footer from "@/components/footer";

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
        <div className="w-full h-[800px] relative">
          <div className="absolute bg-[url('/home-bg.png')] bg-contain opacity-35 bg-no-repeat bg-center w-full h-full z-0"></div>
          <div className="flex flex-col items-center justify-center z-20 w-full h-full relative">
            <div className="flex flex-col items-center justify-center gap-y-4 bg-white p-6 rounded-xl bg-opacity-90">
              <h1 className={cn("text-2xl text-center", poppins.className)}>
                Create Custom Facebook Post, 10x Faster
              </h1>
              <p className="text-center text-muted-foreground text-lg max-w-[600px]">
                Create stunning images with our easy-to-use image editor.
                Perfect for social media posts, blog images, and more.
              </p>
              <div className="flex items-center justify-center gap-x-4 mt-8">
                <Link
                  href={"/editor"}
                  className="w-[200px] h-[50px] flex items-center justify-center bg-sky-500 hover:bg-sky-600 text-white rounded-md shadow-md hover:shadow-none"
                >
                  Get Started Now
                </Link>
                <Link
                  href={"/contact-us"}
                  className="w-[200px] h-[50px] flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white rounded-md shadow-md hover:shadow-none"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
        <DetailsCard img="/templates/square.png" bg />
        <DetailsCard img="/templates/story.png" isRight />
        <DetailsCard img="/templates/tumb.png" bg />
      </section>
      <Footer />
    </div>
  );
};

export default HomePage;
