import { Poppins } from "next/font/google";

import { HomeNavbar } from "@/components/navigation/home-navbar";
import Footer from "@/components/footer";
import { cn } from "@/lib/utils";
import { PlanCard } from "@/components/auth/Plan-card";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

const PricingPage = () => {
  return (
    <>
      <HomeNavbar />
      <div className="w-full min-h-[80vh] h-full flex flex-col items-center justify-center gap-y-2 bg-slate-100">
        <h2 className={cn("text-5xl", poppins.className)}>Choose your plan</h2>
        <p className="text-lg text-muted-foreground mt-2">
          Unlock more features: Our Premium plan awaits.{" "}
        </p>
        <div className="w-full flex items-center justify-center gap-x-4 mt-6">
          <PlanCard />
          <PlanCard />
          <PlanCard />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PricingPage;
