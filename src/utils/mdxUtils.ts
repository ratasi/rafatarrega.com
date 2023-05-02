import path from "path";
import fs from "fs";

export const postsPath = path.join(process.cwd(), "pages/blog/");

export const postsFileNames = fs
  .readdirSync(postsPath)
  .filter((fileName) => /\.mdx?$/.test(fileName));
