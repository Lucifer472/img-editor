import db from "@/lib/db";

export const fetchTemplate = async (name: string) => {
  try {
    const data = await db.template.findUnique({
      where: {
        name,
      },
    });

    if (!data) return null;

    return data;
  } catch (error) {
    return null;
  }
};

export const fetchTemplateById = async (id: string) => {
  try {
    const data = await db.template.findUnique({
      where: {
        id,
      },
    });

    if (!data) return null;

    return data;
  } catch (error) {
    return null;
  }
};

export const saveTemplate = async (
  name: string,
  bubble: string,
  imgData: string,
  opt1: string,
  opt2: string,
  overlay: string,
  text: string,
  watermark: string,
  preview?: string
) => {
  try {
    await db.template.update({
      where: {
        name,
      },
      data: {
        bubble,
        imgData,
        opt1,
        opt2,
        overlay,
        text,
        watermark,
        preview: preview ? preview : "/bubble-placeholder.png",
      },
    });

    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const createTemplate = async (name: string) => {
  try {
    const data = await db.template.create({
      data: {
        name,
      },
    });

    return { success: data };
  } catch (error) {
    return { error: "something went wrong!" };
  }
};

export const fetchAllTemplates = async () => {
  try {
    const data = await db.template.findMany({
      take: 100,
      where: {
        NOT: {
          name: {
            in: ["story", "tumb", "default", "square"],
          },
        },
      },
    });

    if (!data) return null;

    return data;
  } catch (error) {
    return null;
  }
};
