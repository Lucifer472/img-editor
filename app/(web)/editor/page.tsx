import { TemplateSelector } from "@/components/template/template-selector";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500"],
});

const TemplatePage = () => {
  return (
    <div className="w-full h-full min-h-[100vh] flex items-center justify-center">
      <div className="w-full max-w-[800px] px-6 py-4 border-border border-2 shadow-md rounded-md">
        <div className="w-full flex flex-col items-start gap-y-4">
          <h2 className={cn("text-2xl font-[500]", poppins.className)}>
            Select Template:
          </h2>
          <Separator className="w-full" />
          <TemplateSelector />
        </div>
      </div>
    </div>
  );
};

export default TemplatePage;
