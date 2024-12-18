/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "someserver.com",
          port: "",
          pathname: "/images/**",
        },
      ],
    },
  };
  export default nextConfig;