import fs from "fs";
import path from "path";
import { pool } from "../config/database";

const uploadsDir = path.join(__dirname, "..", "..", "uploads");
const baseUrl = "http://localhost:3001/uploads"; // change for production

(async () => {
  try {
    const files = fs
      .readdirSync(uploadsDir)
      .filter((file) => /\.(jpg|jpeg|png)$/i.test(file));

    for (const file of files) {
      const imageId = parseInt(file.split(".")[0]); // "1.jpg" → 1
      if (isNaN(imageId)) {
        console.warn(`⚠️ Skipped file: ${file} — no valid ID found.`);
        continue;
      }

      const imageUrl = `${baseUrl}/${file}`;

      const [result] = await pool.query(
        `UPDATE properties SET image_url = ? WHERE id = ?`,
        [imageUrl, imageId]
      );

      const updated = (result as any).affectedRows;
      if (updated > 0) {
        console.log(`✅ Updated property ID ${imageId} → ${imageUrl}`);
      } else {
        console.warn(`⚠️ No property found for ID ${imageId}`);
      }
    }

    console.log("🎉 Done updating image URLs!");
    process.exit(0);
  } catch (err) {
    console.error("❌ Error updating image URLs:", err);
    process.exit(1);
  }
})();
