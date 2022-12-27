/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com"],
  },
  async redirects() {
    return [
      {
        source: "/make",
        destination:
          "https://raw.githubusercontent.com/robinaerts/makeproject/main/makeproject.ps1",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
