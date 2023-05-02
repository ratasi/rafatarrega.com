export type BlogProps = {
  articles: {
    slug: string;
    author: string;
    date: string;
    title: string;
    tags: [];
    keywords: string;
    description: string;
    logo: string;
  }[];
};
