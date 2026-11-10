// Renders public/og-image.png (1200x630). Run: node scripts/generate-og-image.mjs
import sharp from "sharp";

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#111111"/>
  <rect x="0" y="0" width="1200" height="10" fill="#c9f31d"/>
  <circle cx="1040" cy="150" r="260" fill="#1b1b1b"/>
  <circle cx="1040" cy="150" r="150" fill="#242424"/>
  <circle cx="1040" cy="150" r="42" fill="#c9f31d"/>
  <text x="80" y="140" font-family="Georgia, 'Times New Roman', serif" font-size="46" fill="#ffffff">RegularHub</text>
  <text x="80" y="300" font-family="Arial, Helvetica, sans-serif" font-size="68" font-weight="700" fill="#ffffff">Digital Product Engineering</text>
  <text x="80" y="385" font-family="Arial, Helvetica, sans-serif" font-size="68" font-weight="700" fill="#c9f31d">&amp; Strategic Growth</text>
  <text x="80" y="480" font-family="Arial, Helvetica, sans-serif" font-size="30" fill="#d4d4d4">Custom software · SaaS · Enterprise systems · AI automation</text>
  <text x="80" y="570" font-family="Arial, Helvetica, sans-serif" font-size="28" fill="#9a9a9a">regularhub.in</text>
</svg>`;

await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile("public/og-image.png");
console.log("wrote public/og-image.png");
