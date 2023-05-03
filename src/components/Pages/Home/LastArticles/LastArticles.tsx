import { BlogProps } from "@/types/Blog.types";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export function LastArticles(props: BlogProps) {
  const router = useRouter();
  const { articles } = props;

  const goArticle = (link: string) => {
    router.push(`/blog/${link}`);
  };

  return (
    <main className="pr-5 mb-20 lg:p-2">
      <h2 className="text-2xl dark:text-textLight">Últimos artículos</h2>
      {articles.map((article) => (
        <div key={article.slug}>
          <article
            className="flex items-center px-1 py-2 my-6 transition-transform duration-500 border border-transparent rounded-md cursor-pointer hover:scale-105 hover:border-white/10 hover:bg-zinc-900/20"
            onClick={() => goArticle(article.slug)}
          >
            <Image src={article.logo} alt="React Logo" width="70" height="70" />
            <div className="ml-5 dark:text-textLight">
              <h3 className="text-xl">{article.title}</h3>
              <div className="relative mt-2">
                <span
                  className="absolute inset-y-0 left-0 flex items-center"
                  aria-hidden="true"
                >
                  <span className="h-4 w-0.5 rounded-full bg-zinc-900 dark:bg-white"></span>
                </span>
                <time className="pl-3 mt-2 text-md">{article.date}</time>
              </div>
              <p className="mt-2 line-clamp-2">{article.description}</p>
              <Link
                href={article.slug}
                className="flex items-center mt-2 text-amber-600"
              >
                <span className="text-sm">Leer artículo</span>
                <Image
                  src="/assets/img/svg/arrow-right.svg"
                  alt="Leer artículo"
                  width="16"
                  height="16"
                  className="ml-2"
                />
              </Link>
            </div>
            <hr className="color-white" />
          </article>
          <hr />
        </div>
      ))}
      <div className="relative px-6 py-2 mt-6 transition duration-500 border-2 border-solid rounded-md cursor-pointer hover:scale-105 w-fit border-textLight hover:bg-amber-600 ">
        <Link href="/blog" className="absolute bottom-0 right-0 w-full h-full">
        </Link>
        <div className="flex items-center ">
          <p className="text-textLight">Ver todos los artículos</p>
          <Image
            src="/assets/img/svg/chevron-right.svg"
            alt="Todos los artículos"
            width="17"
            height="17"
          />
        </div>
      </div>
    </main>
  );
}
