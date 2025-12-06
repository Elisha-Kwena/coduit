import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  reactStrictMode: true,
  transpilePackages: ["styled-components"],
};

export default nextConfig;
