import { Poppins } from "next/font/google";

import { HomeNavbar } from "@/components/navigation/home-navbar";
import { Separator } from "@/components/ui/separator";
import { ContactForm } from "@/components/etc/contact-form";
import Footer from "@/components/footer";

import { cn } from "@/lib/utils";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700"],
});

const ContactPage = () => {
  return (
    <>
      <HomeNavbar />
      <div className="w-full min-h-[80vh] h-full flex flex-col items-center justify-center gap-y-2 bg-slate-100 p-4">
        <div className="border-border border rounded-xl shadow-md bg-white px-6 py-8 max-w-[720px] w-full min-w-[300px] flex flex-col items-center gap-y-2">
          <h2 className={cn("text-4xl w-full text-left", poppins.className)}>
            Contact Us
          </h2>
          <p className="w-full text-left text-muted-foreground">
            Use the form given below to Contact Us
          </p>
          <Separator />
          <ContactForm />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
