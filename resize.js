// resize.js
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const folder = process.argv[2] || ".";
const maxSize = 1024;

const files = fs
  .readdirSync(folder)
  .filter((f) => /\.(jpg|jpeg|png)$/i.test(f));

(async () => {
  for (const file of files) {
    const filePath = path.join(folder, file);
    const image = sharp(filePath);
    const meta = await image.metadata();

    if (meta.width > maxSize || meta.height > maxSize) {
      const buffer = await image
        .resize(maxSize, maxSize, { fit: "inside", withoutEnlargement: true })
        .toBuffer();

      await fs.promises.writeFile(filePath, buffer);
      console.log(`Resized: ${file}`);
    } else {
      console.log(`Skipped: ${file}`);
    }
  }
})();
