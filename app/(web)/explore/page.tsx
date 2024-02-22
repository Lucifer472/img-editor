import { redirect } from "next/navigation";

import { PreviewCard } from "@/components/etc/preview-card";
import { HomeNavbar } from "@/components/navigation/home-navbar";
import Footer from "@/components/footer";

import { fetchAllTemplates } from "@/lib/template";
export const revalidate = 0;

const ExplorePage = async () => {
  const data = await fetchAllTemplates();

  if (!data || data.length === 0) {
    return redirect("/");
  }

  return (
    <div className="w-full bg-slate-100">
      <HomeNavbar />
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
