/** @type {import('next').NextConfig} */
// No `output: 'export'`: the admin dashboard needs a Node runtime (API routes, sessions, getServerSideProps).
const isDev = process.env.NODE_ENV !== "production";
const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: https:",
  "font-src 'self' data:",
  "connect-src 'self'",
  "frame-ancestors 'none'", "base-uri 'self'", "form-action 'self'", "object-src 'none'",
].join("; ");
const adminHeaders = [
  { key: "Cache-Control", value: "no-store" },
  { key: "X-Robots-Tag", value: "noindex, nofollow, noarchive" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "same-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  { key: "Content-Security-Policy", value: csp },
  { key: "X-Content-Type-Options", value: "nosniff" },
];

const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  poweredByHeader: false,
  images: {
    unoptimized: true,
  },
  async headers() {
    return [
      { source: "/admin/:path*", headers: adminHeaders },
      { source: "/api/admin/:path*", headers: adminHeaders },
      { source: "/api/:path*", headers: [{ key: "X-Content-Type-Options", value: "nosniff" }] },
    ];
  },
}

module.exports = nextConfig
