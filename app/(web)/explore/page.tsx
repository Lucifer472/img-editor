import { redirect } from "next/navigation";

import { Button } from "@/components/ui/button";

import { PreviewCard } from "@/components/etc/preview-card";
import Footer from "@/components/footer";
import Logo from "@/components/logo";

import { fetchAllTemplates } from "@/lib/template";

export const revalidate = 0;

const ExplorePage = async () => {
  const data = await fetchAllTemplates();

  if (!data || data.length === 0) {
    return redirect("/");
  }

  return (
    <div className="w-full bg-slate-100">
      <nav className="w-full h-20 flex items-center justify-between px-4 bg-white border-border border-b-2">
        <Logo />
        <div className="flex items-center justify-end gap-x-2">
          <Button variant={"outline"}>Login</Button>
          <Button variant={"outline"}>Contact Us</Button>
        </div>
      </nav>
      <div className="w-full min-h-[100vh] flex flex-wrap items-start justify-evenly gap-4 px-4 py-6">
        {data.map((d) => (
          <PreviewCard
            key={d.id}
            img={d.preview}
            link={`/editor/${d.name}`}
            name={d.name}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default ExplorePage;
