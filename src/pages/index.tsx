import { HeaderSeo } from "@/components/HeaderSeo";
import { HomePage } from "@/components/Pages/Home/Home";
import Layouts from "@/layouts";

import { BlogProps } from "@/types/Blog.types";
import { getAllArticles } from "@/utils/allPosts";

export default function Home(props: BlogProps) {
  const { articles } = props;

  return (
    <>
      <HeaderSeo />
      <Layouts.MainLayout>
        <HomePage articles={articles} />
      </Layouts.MainLayout>
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
