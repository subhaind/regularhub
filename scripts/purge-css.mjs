// Post-build step: strips CSS selectors that no built page or script can reference.
// Runs against the static export in ./out after `next build`.
//   Safe by construction: a selector survives if ANY of its class/id/tag tokens appears
//   anywhere in the exported HTML or JS (so classes added at runtime by gsap/swiper/
//   react-bootstrap are kept because their names are literal strings in those bundles).
import { PurgeCSS } from "purgecss";
import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

// Static export -> ./out ; server build (needed for /admin) -> ./.next
import { existsSync } from "node:fs";
const OUT = existsSync("out") ? "out" : ".next";
// webpack emits CSS to static/css, Turbopack to static/chunks — search the whole static dir.
const cssDir = OUT === "out" ? path.join(OUT, "_next", "static") : path.join(OUT, "static");

const walk = async (dir, exts, acc = []) => {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) await walk(p, exts, acc);
    else if (exts.includes(path.extname(e.name))) acc.push(p);
  }
  return acc;
};

// PurgeCSS treats paths as globs, so Windows backslashes must be forward slashes.
const posix = (list) => list.map((f) => f.split(path.sep).join("/"));
// Class names composed at runtime (`main-menu-${style}`, "col-" + n) never appear whole in
// the built output, so find every such prefix/suffix in the source and safelist it.
const escapeRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const srcFiles = await walk("src", [".js", ".jsx"]);
const prefixes = new Set();
const suffixes = new Set();
for (const f of srcFiles) {
  if (f.includes(".graphify")) continue;
  const code = await readFile(f, "utf8");
  for (const m of code.matchAll(/([A-Za-z][\w-]*-)\$\{/g)) prefixes.add(m[1]); // `name-${x}`
  for (const m of code.matchAll(/["']([A-Za-z][\w-]*-)["']\s*\+/g)) prefixes.add(m[1]); // "name-" + x
  for (const m of code.matchAll(/\$\{[^}]*\}(-[A-Za-z][\w-]*)/g)) suffixes.add(m[1]); // `${x}-name`
}
const dynamic = [...[...prefixes].map((p) => new RegExp("^" + escapeRe(p))), ...[...suffixes].map((s) => new RegExp(escapeRe(s) + "$"))];
console.log(`dynamic class prefixes safelisted: ${[...prefixes].join(" ")} ${[...suffixes].join(" ")}`);

const htmlAndJs = posix(await walk(OUT, [".html", ".js"]));
const cssFiles = posix(await walk(cssDir, [".css"]));

if (cssFiles.length === 0) {
  console.log("No CSS files found under out/_next/static — nothing to purge.");
  process.exit(0);
}
const results = await new PurgeCSS().purge({
  content: htmlAndJs,
  css: cssFiles,
  // Characters that appear inside real class names (bootstrap `col-md-6`, `g-0`, `w-50`, `fa-solid`...).
  defaultExtractor: (c) => c.match(/[A-Za-z0-9_\-:/%.]+/g) || [],
  safelist: {
    standard: [...dynamic, /^swiper/, /^modal/, /^offcanvas/, /^fade/, /^show$/, /^collaps/, /^active$/, /^open/, /^dark$/, /^sticky/, /^fa-/, /^fa$/, /^visually-hidden/, /^form-status/],
    deep: [/^swiper/],
  },
  keyframes: false,
  fontFace: false,
  variables: false,
});

let before = 0, after = 0;
for (const r of results) {
  const original = (await readFile(r.file, "utf8")).length;
  before += original;
  after += r.css.length;
  await writeFile(r.file, r.css);
  console.log(`${path.basename(r.file)}: ${(original / 1024).toFixed(0)} KB -> ${(r.css.length / 1024).toFixed(0)} KB`);
}
console.log(`CSS total: ${(before / 1024).toFixed(0)} KB -> ${(after / 1024).toFixed(0)} KB`);
