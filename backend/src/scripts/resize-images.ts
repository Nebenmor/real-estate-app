// backend/scripts/resize-images.ts

import sharp from "sharp";
import fs from "fs";
import path from "path";

const inputDir = path.join(__dirname, "..", "raw-images");
const outputDir = path.join(__dirname, "..", "uploads");

// Ensure the output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

// Get all supported image files
const imageFiles = fs
  .readdirSync(inputDir)
  .filter((file) => /\.(jpg|jpeg|png)$/i.test(file));

if (imageFiles.length === 0) {
  console.log("⚠️ No images found in raw-images folder.");
  process.exit(0);
}

(async () => {
  for (const file of imageFiles) {
    const inputPath = path.join(inputDir, file);
    const outputPath = path.join(outputDir, file);

    try {
      await sharp(inputPath)
        .resize(1200, 800, { fit: "cover" })
        .jpeg({ quality: 75 })
        .toFile(outputPath);

      console.log(`✅ Resized and saved: ${file}`);
    } catch (error) {
      console.error(`❌ Error processing ${file}:`, error);
    }
  }
})();
