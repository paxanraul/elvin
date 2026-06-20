/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,
  devIndicators: { position: "bottom-right" },
  output: "export",
  trailingSlash: true,
  basePath: isProd ? "/elvin" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
