import { Poppins } from "next/font/google";
import Link from "next/link";

import Footer from "@/components/footer";
import { HomeNavbar } from "@/components/navigation/home-navbar";
import { Reviews } from "@/components/etc/reviews";
import { DetailsCard } from "@/components/home/details-card";
import { Card1, Card2, Card3 } from "@/components/etc/home-page";

import { cn } from "@/lib/utils";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

const HomePage = () => {
  return (
    <div className="w-full bg-slate-100">
      <HomeNavbar />
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
                  href={"/explore"}
                  className="w-[200px] h-[50px] flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white rounded-md shadow-md hover:shadow-none"
                >
                  Explore Project
                </Link>
              </div>
            </div>
          </div>
        </div>
        <DetailsCard img="/templates/square.png" bg>
          <Card1 />
        </DetailsCard>
        <DetailsCard img="/templates/story.png" isRight>
          <Card2 isRight={true} />
        </DetailsCard>
        <DetailsCard img="/templates/tumb.png" bg>
          <Card3 />
        </DetailsCard>
        <Reviews />
      </section>
      <Footer />
    </div>
  );
};

export default HomePage;
