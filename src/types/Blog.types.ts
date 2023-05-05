export type BlogProps = {
  articles: {
    slug: string;
    author: string;
    date: number;
    title: string;
    tags: [];
    keywords: string;
    description: string;
    logo: string;
  }[];
};
