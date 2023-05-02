import { HeaderSeo } from "@/components/HeaderSeo";
import { HomePage } from "@/components/Pages/Home/Home";
import { BlogProps } from "@/types/Blog.types";
import { getAllArticles } from "@/utils/allPosts";

export default function Home(props: BlogProps) {
  const { articles } = props;

  return (
    <>
      <HeaderSeo />
      <HomePage articles={articles} />
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
