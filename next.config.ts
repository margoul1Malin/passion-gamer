import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/les-avantages-du-clavier-mecanique-de-gaming',
        destination: 'https://www.oxelya.com',
        permanent: true, // 301 redirect
      },
    ];
  },
};

export default nextConfig;
