const createNextIntlPlugin = require("next-intl/plugin");

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "gtcfx-bucket.s3.ap-southeast-1.amazonaws.com",
      "img.youtube.com",
    ],
  },
};

module.exports = withNextIntl(nextConfig);
