// Recompresses large images in place (same name, same dimensions).
// Run: node scripts/optimize-images.mjs   — a result is kept only if it saves >= 15%.
import sharp from "sharp";
import { readdir, stat, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const MIN_BYTES = 150 * 1024;
const roots = ["public/assets/imgs"];

const walk = async (dir) => {
  const out = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(p)));
    else out.push(p);
  }
  return out;
};

let before = 0, after = 0, changed = 0;
for (const root of roots) {
  for (const file of await walk(root)) {
    const ext = path.extname(file).toLowerCase();
    if (![".png", ".jpg", ".jpeg"].includes(ext)) continue;
    const size = (await stat(file)).size;
    if (size < MIN_BYTES) continue;
    const input = await readFile(file);
    const img = sharp(input, { failOn: "none" });
    const out =
      ext === ".png"
        ? await img.png({ palette: true, quality: 85, effort: 10, compressionLevel: 9 }).toBuffer()
        : await img.jpeg({ quality: 80, mozjpeg: true }).toBuffer();
    before += size;
    if (out.length <= size * 0.85) {
      await writeFile(file, out);
      after += out.length;
      changed++;
      console.log(`${(size / 1024).toFixed(0)} KB -> ${(out.length / 1024).toFixed(0)} KB  ${file}`);
    } else after += size;
  }
}
console.log(`\n${changed} files recompressed; large-image total ${(before / 1048576).toFixed(1)} MB -> ${(after / 1048576).toFixed(1)} MB`);
