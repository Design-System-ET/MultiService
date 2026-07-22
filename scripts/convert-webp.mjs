import sharp from "sharp";
import { readdirSync, statSync } from "fs";
import { extname, join } from "path";

const dir = "public";
const files = readdirSync(dir).filter(f => /\.(jpg|jpeg|png)$/i.test(f) && !f.startsWith("favicon") && !f.startsWith("apple") && !f.startsWith("web-app"));

for (const file of files) {
  const src = join(dir, file);
  const out = join(dir, file.replace(/\.(jpg|jpeg|png)$/i, ".webp"));
  const img = sharp(src);
  const meta = await img.metadata();
  if (meta.width > 1200) img.resize(1200);
  await img.webp({ quality: 80 }).toFile(out);
  const oldSize = statSync(src).size;
  const newSize = statSync(out).size;
  console.log(`${file} → ${file.replace(/\.(jpg|jpeg|png)$/i, ".webp")}  (${(oldSize/1024).toFixed(0)}KB → ${(newSize/1024).toFixed(0)}KB)`);
}
