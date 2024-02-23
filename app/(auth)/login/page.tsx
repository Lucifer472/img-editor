import { Poppins } from "next/font/google";

import { HomeNavbar } from "@/components/navigation/home-navbar";
import { LoginForm } from "@/components/auth/login-form";
import Footer from "@/components/footer";

import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500"],
});

const LoginPage = () => {
  return (
    <>
      <HomeNavbar />
      <div className="w-full min-h-[80vh] h-full flex flex-col items-center justify-center">
        <div className="max-w-[320px] w-full flex flex-col gap-y-4 items-start mx-auto p-4 rounded-xl border-border border-2 shadow-md">
          <div className="flex flex-col items-center justify-center gap-y-2 w-full">
            <h2
              className={cn(
                "text-2xl font-[500] text-center w-full uppercase",
                poppins.className
              )}
            >
              Image Creator
            </h2>
            <p className="text-center w-full text-muted-foreground">
              Login into Account
            </p>
          </div>
          <Separator className="w-full" />
          <LoginForm />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LoginPage;
