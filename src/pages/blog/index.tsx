import { HeaderSeo } from "@/components/HeaderSeo";
import { BlogPage } from "@/components/Pages/Blog";
import { BlogProps } from "@/types/Blog.types";
import { getAllArticles } from "@/utils/allPosts";

export default function Blog(props: BlogProps) {
  const { articles } = props;

  return (
    <>
      <HeaderSeo
        title="Blog TarreDev"
        description="Post relacionados con el mundo de la programación"
      />
      <BlogPage articles={articles} />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      articles: (await getAllArticles()).map(
        ({ component, ...metaSeo }) => metaSeo
      ),
    },
  };
}
