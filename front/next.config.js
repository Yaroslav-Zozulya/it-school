/** @type {import('next').NextConfig} */
const path = require("path");
const withTM = require("next-transpile-modules")(["tailwindcss"]);

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  // images: {
  //   domains: ["https://roomy-tray-production.up.railway.app/"],
  // },
};

module.exports = nextConfig;
