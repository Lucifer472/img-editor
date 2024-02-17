import { Navbar } from "@/components/navigation/navbar";
import { MainCanvas } from "@/components/editor/main-canvas";
import { Sidebar } from "@/components/sidebar-menus/sidebar";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <section className="w-full h-full grid grid-cols-11">
        <div className="col-span-9 back-img">
          <MainCanvas />
        </div>
        <div className="col-span-2 w-full h-full">
          <Sidebar />
        </div>
      </section>
    </>
  );
};

export default HomePage;
