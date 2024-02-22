import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export const Card1 = ({ isRight }: { isRight?: boolean }) => {
  return (
    <div
      className={cn(
        "w-full flex flex-col gap-y-4",
        isRight ? "items-end" : "items-start"
      )}
    >
      <h2 className="text-xl font-light text-sky-500">Create</h2>
      <p
        className={cn(
          "text-2xl w-full",
          poppins.className,
          isRight ? "text-right" : "text-left"
        )}
      >
        Bring your Design to Life.
      </p>
      <div
        className={cn(
          "w-full flex flex-col gap-y-6 mt-6",
          isRight ? "items-end" : "items-start"
        )}
      >
        <p>
          <span className={cn("text-lg", poppins.className)}>
            Let your imagination{" "}
          </span>
          run wild and bring your designs to life with our easy-to-use tools.
        </p>
        <p>
          <span className={cn("text-lg", poppins.className)}>
            No coding required!
          </span>{" "}
          Get started quickly with our pre-built components and customize them
          to match your unique style.
        </p>
        <p>
          <span className={cn("text-lg", poppins.className)}>
            Create stunning
          </span>{" "}
          interactive prototypes that will wow your clients and stakeholders.
        </p>
        <p>
          <span className={cn("text-lg", poppins.className)}>
            Connect your designs
          </span>{" "}
          to real-world data and interactions to create truly dynamic
          experiences.
        </p>
      </div>
    </div>
  );
};

export const Card2 = ({ isRight }: { isRight?: boolean }) => {
  return (
    <div
      className={cn(
        "w-full flex flex-col gap-y-4",
        isRight ? "items-end" : "items-start"
      )}
    >
      <h2 className="text-xl font-light text-sky-500">Modify</h2>
      <p
        className={cn(
          "text-2xl w-full",
          poppins.className,
          isRight ? "text-right" : "text-left"
        )}
      >
        Modify You are Design on the go.
      </p>
      <div
        className={cn(
          "w-full flex flex-col gap-y-6 mt-6",
          isRight ? "items-end" : "items-start"
        )}
      >
        <p>
          <span className={cn("text-lg", poppins.className)}>
            Refine your vision in seconds:{" "}
          </span>
          Drag, drop, and adjust pre-built blocks to perfectly shape your design
        </p>
        <p>
          <span className={cn("text-lg", poppins.className)}>
            Tailor for any audience:
          </span>{" "}
          Switch themes, fonts, and colors to match your brand or project needs.
        </p>
        <p>
          <span className={cn("text-lg", poppins.className)}>
            Tweak with precision:
          </span>{" "}
          Use advanced settings to control every detail, from spacing to
          animations.
        </p>
        <p>
          <span className={cn("text-lg", poppins.className)}>
            Fine-tune your masterpiece:
          </span>{" "}
          Adjust layouts, styles, and interactions with intuitive tools.
        </p>
      </div>
    </div>
  );
};

export const Card3 = ({ isRight }: { isRight?: boolean }) => {
  return (
    <div
      className={cn(
        "w-full flex flex-col gap-y-4",
        isRight ? "items-end" : "items-start"
      )}
    >
      <h2 className="text-xl font-light text-sky-500">Download</h2>
      <p
        className={cn(
          "text-2xl w-full",
          poppins.className,
          isRight ? "text-right" : "text-left"
        )}
      >
        Directly Post You are Designs.
      </p>
      <div
        className={cn(
          "w-full flex flex-col gap-y-6 mt-6",
          isRight ? "items-end" : "items-start"
        )}
      >
        <p>
          <span className={cn("text-lg", poppins.className)}>
            Download for free:
          </span>{" "}
          Get your edited image instantly, without any hidden fees.
        </p>
        <p>
          <span className={cn("text-lg", poppins.className)}>
            High-quality downloads:
          </span>{" "}
          Enjoy stunning clarity and vibrant colors in your saved image.
        </p>
        <p>
          <span className={cn("text-lg", poppins.className)}>
            One-click download:
          </span>{" "}
          Save your creation with a single click, ready to use for all your
          needs.
        </p>
        <p>
          <span className={cn("text-lg", poppins.className)}>
            Spread the beauty:
          </span>{" "}
          Share your edited image on social media or with friends and family.
        </p>
      </div>
    </div>
  );
};
