"use server";

import fs from "fs";
import path from "path";

export const readLocalFonts = async () => {
  const fontFolder = "public/fonts";

  return new Promise((resolve, reject) => {
    fs.readdir(fontFolder, (err, files) => {
      if (err) {
        console.error("Error reading font folder:", err);
        reject(err);
        return;
      }

      // Filter only files with specific extensions (e.g., .ttf, .otf)
      const fontFiles = files.filter((file) => /\.(woff|woff2)$/.test(file));

      // Extract filenames without extensions
      const fontNames = fontFiles.map((file) => path.parse(file).name);

      resolve(fontNames);
    });
  });
};
