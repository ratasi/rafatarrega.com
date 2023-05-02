export type PostLayoutProps = {
  metaSeo: {
    author: string;
    date: string;
    title: string;
    slug: string;
    tags: string[];
    keywords: string;
    description: string;
  };
  children: JSX.Element;
};
