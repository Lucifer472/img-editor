"use server";

import {
  createTemplate,
  fetchTemplate,
  fetchTemplateById,
  saveTemplate,
} from "@/lib/template";

export const createProjectByTemplate = async (
  template: string,
  name: string
) => {
  const templateData = await fetchTemplate(template);

  if (templateData === null) return { error: "No Template Found!" };

  if (name.length < 5) {
    return { error: "Project Name too short!" };
  }

  const dataTemplate = await createTemplate(name);

  if (dataTemplate.error) {
    return { error: dataTemplate.error };
  }

  const res = await saveTemplate(
    name,
    templateData.bubble as string,
    templateData.imgData as string,
    templateData.opt1 as string,
    templateData.opt2 as string,
    templateData.overlay as string,
    templateData.text as string,
    templateData.watermark as string
  );

  if (res) {
    return { success: name };
  }

  return { error: "Something Went Wrong!" };
};

export const updateTemplate = async (
  name: string | null,
  bubble: string | null,
  imgData: string | null,
  opt1: string | null,
  opt2: string | null,
  overlay: string | null,
  text: string | null,
  watermark: string | null
) => {
  if (
    name &&
    bubble &&
    imgData &&
    opt1 &&
    opt2 &&
    overlay &&
    text &&
    watermark
  ) {
    const res = await saveTemplate(
      name,
      bubble as string,
      imgData as string,
      opt1 as string,
      opt2 as string,
      overlay as string,
      text as string,
      watermark as string
    );

    return res;
  }

  return false;
};

export const getTemplateById = async (id: string) => {
  const res = await fetchTemplateById(id);

  return res;
};
