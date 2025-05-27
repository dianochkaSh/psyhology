import type { NextConfig } from "next";
import { DOMAIN } from '@/consts/consts';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: [DOMAIN],

  },
};

export default nextConfig;