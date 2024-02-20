import dynamic from "next/dynamic";
import { redirect } from "next/navigation";

import { Navbar } from "@/components/navigation/navbar";
import { fetchTemplate } from "@/lib/template";
import { Sidebar } from "@/components/sidebar-menus/sidebar";

const TemplatePage = async ({ params }: { params: { name: string } }) => {
  const projectName = decodeURIComponent(params.name);

  const project = await fetchTemplate(projectName);

  if (!project) {
    return redirect("/");
  }

  const ClientWrapper = dynamic(
    () => import("@/components/editor/client-wrapper"),
    {
      ssr: false,
    }
  );

  const MainCanvas = dynamic(() => import("@/components/editor/main-canvas"), {
    ssr: false,
  });

  return (
    <>
      <Navbar templateName={projectName} />
      <section className="w-full h-full flex">
        <ClientWrapper projectData={project}>
          <div className="w-full back-img">
            <MainCanvas />
          </div>
        </ClientWrapper>
        <div className="w-full h-full max-w-[360px] min-w-[350px]">
          <Sidebar />
        </div>
      </section>
    </>
  );
};

export default TemplatePage;