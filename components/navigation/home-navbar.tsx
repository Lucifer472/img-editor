"use client";
import { useRouter } from "next/navigation";
import Logo from "@/components/logo";

import { Button } from "@/components/ui/button";

export const HomeNavbar = () => {
  const router = useRouter();
  return (
    <nav className="w-full h-20 flex items-center justify-between px-4 bg-white border-border border-b-2">
      <Logo />
      <div className="flex items-center justify-end gap-x-2">
        <Button variant={"outline"} onClick={() => router.push("/login")}>
          Login
        </Button>
        <Button variant={"outline"} onClick={() => router.push("/contact-us")}>
          Contact Us
        </Button>
      </div>
    </nav>
  );
};
