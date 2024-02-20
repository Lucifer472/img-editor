"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { getLocalStorage } from "@/lib/storage";
import { createProjectByTemplate, getTemplateById } from "@/action/template";
import toast from "react-hot-toast";

export const TemplateSelector = () => {
  const [template, setTemplate] = useState<string | null>(null);
  const [projectName, setProjectName] = useState<string | null>(null);
  const [projectId, setProjectId] = useState<string | null>(null);

  const router = useRouter();

  useEffect(() => {
    const pId = getLocalStorage("projectId");

    if (pId) {
      getTemplateById(pId).then((res) => {
        if (res) {
          setProjectId(res.name);
        }
      });
    }
  }, []);

  const handleSelect = (e: string) => {
    if (e === template) {
      setTemplate(null);
    } else {
      setTemplate(e);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;

    // Validate input using a regular expression
    const isValidInput = /^[a-zA-Z0-9]+( [a-zA-Z0-9]+)*$/.test(inputValue);

    // Update state based on validation
    setProjectName(isValidInput || inputValue === "" ? inputValue : null);
  };

  const handleProjectCreation = () => {
    if (template && projectName) {
      createProjectByTemplate(template, projectName).then((res) => {
        if (res.error) {
          toast.error(res.error);
        }

        if (res.success) {
          router.push("/editor/" + encodeURIComponent(res.success));
        }
      });
    } else if (projectName) {
      createProjectByTemplate("default", projectName).then((res) => {
        if (res.error) {
          toast.error(res.error);
        }

        if (res.success) {
          router.push("/editor/" + encodeURIComponent(res.success));
        }
      });
    } else {
      toast.error("Something Went Wrong");
    }
  };

  return (
    <>
      <div className="flex items-center justify-center gap-x-4 w-full">
        <Label
          htmlFor="square"
          className="w-1/3 h-[250px] flex flex-col items-center justify-center gap-y-2 cursor-pointer"
        >
          <Input
            id="square"
            name="template"
            type="radio"
            value="square"
            checked={template === "square"}
            onChange={() => null}
            onClick={(e) => handleSelect(e.currentTarget.value)}
            className="hidden peer"
          />
          <div className="w-full h-full relative border-2 border-border peer-checked:border-sky-300">
            <Image
              src={"/templates/square.png"}
              alt="Square"
              fill
              className="object-contain"
            />
          </div>
          <span className="block mt-2 text-xl">Square Template</span>
        </Label>
        <Label
          htmlFor="story"
          className="w-1/3 h-[250px] flex flex-col items-center justify-center gap-y-2"
        >
          <Input
            id="story"
            name="template"
            type="radio"
            value="story"
            checked={template === "story"}
            onChange={() => null}
            onClick={(e) => handleSelect(e.currentTarget.value)}
            className="hidden peer"
          />
          <div className="w-full h-full relative border-2 border-border peer-checked:border-sky-300">
            <Image
              src={"/templates/story.png"}
              alt="story"
              fill
              className="object-contain"
            />
          </div>
          <span className="block mt-2 text-xl">Story Template</span>
        </Label>
        <Label
          htmlFor="tumb"
          className="w-1/3 h-[250px] flex flex-col items-center justify-center gap-y-2"
        >
          <Input
            id="tumb"
            name="template"
            type="radio"
            value="tumb"
            checked={template === "tumb"}
            onChange={() => null}
            onClick={(e) => handleSelect(e.currentTarget.value)}
            className="hidden peer"
          />
          <div className="w-full h-full relative border-2 border-border peer-checked:border-sky-300">
            <Image
              src={"/templates/tumb.png"}
              alt="tumb"
              fill
              className="object-contain"
            />
          </div>
          <span className="block mt-2 text-xl">Tumb Template</span>
        </Label>
      </div>
      <Separator className="w-full my-2" />
      <Label htmlFor="projectName">Project Name</Label>
      <Input
        id="projectName"
        name="projectName"
        type="text"
        className="text-xl py-6"
        onChange={(e) => handleChange(e)}
      />
      <Separator className="w-full my-2" />
      <div className="w-full flex items-center justify-center gap-x-2">
        <Button
          variant={"default"}
          size={"lg"}
          disabled={projectName === null}
          onClick={handleProjectCreation}
        >
          {template ? "Start with Template" : "Start Blank"}
        </Button>
        <Button
          variant={"outline"}
          size={"lg"}
          disabled={projectId === null}
          onClick={() => router.push("/editor/" + projectId)}
        >
          Continue
        </Button>
      </div>
    </>
  );
};
