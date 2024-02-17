/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        hostname: "img.missiongujarat.in",
        port: "",
        protocol: "https",
        pathname: "/i/**",
      },
    ],
  },
};

export default nextConfig;
