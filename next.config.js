/** @type {import('next').NextConfig} */
const rehypePrettyCode = require("rehype-pretty-code");

const options = {
  theme: "one-dark-pro",
};

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [[rehypePrettyCode, options]],
  },
});

const nextConfig = {
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  reactStrictMode: true,
};

module.exports = withMDX(nextConfig);
