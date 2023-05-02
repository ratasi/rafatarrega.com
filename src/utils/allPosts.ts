import * as path from "path";
import glob from "fast-glob";

async function importArticle(articleFilename: string) {
  let { metaSeo, default: component } = await import(
    `../pages/blog/${articleFilename}`
  );
  return {
    slug: articleFilename.replace(/(\/index)?\.mdx$/, ""),
    ...metaSeo,
    component,
  };
}

export async function getAllArticles() {
  let articleFilenames = await glob(["*.mdx", "*/index.mdx"], {
    cwd: path.join(process.cwd(), "src/pages/blog"),
  });

  let articles = await Promise.all(articleFilenames.map(importArticle));

  return articles;
  //   return articles.sort((a, z) => new Date(z.date) - new Date(a.date));
}
