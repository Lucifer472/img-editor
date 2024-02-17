import { Property } from "@/components/sidebar-menus/properties-menu";
import { ImgPropertyContent } from "@/components/sidebar-menus/img-properties-content";
import { OverlayPropertyContent } from "@/components/sidebar-menus/overlay-properties-content";
import { TextPropertiesContent } from "@/components/sidebar-menus/text-properties-content";
import { BubblePropertiesContent } from "@/components/sidebar-menus/bubble-properties-content";
import { LogoPropertiesContent } from "@/components/sidebar-menus/logo-properties-content";
import { ExtraPropertiesContent } from "@/components/sidebar-menus/extra-properties-content";

export const Sidebar = () => {
  return (
    <aside
      className="w-full bg-slate-100 border-l border-border"
      style={{ minHeight: "calc(-80px + 100vh)", overflow: "hidden" }}
    >
      <div
        className="w-full flex flex-col gap-y-4 p-6 overflow-y-scroll"
        style={{ maxHeight: "calc(-80px + 100vh)" }}
      >
        <Property label="Image Properties">
          <ImgPropertyContent />
        </Property>
        <Property label="Overlay Properties">
          <OverlayPropertyContent />
        </Property>
        <Property label="Text Properties">
          <TextPropertiesContent />
        </Property>
        <Property label="Bubble Properties">
          <BubblePropertiesContent />
        </Property>
        <Property label="Logo Properties">
          <LogoPropertiesContent />
        </Property>
        <Property label="Extra Properties">
          <ExtraPropertiesContent />
        </Property>
      </div>
    </aside>
  );
};
