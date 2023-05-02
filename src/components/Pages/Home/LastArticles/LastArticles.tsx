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
    <main className="pr-5 lg:p-2">
      <h2 className="text-2xl dark:text-textLight">Últimos artículos</h2>
      {articles.map((article) => (
        <article
          key={article.slug}
          className="my-6 flex cursor-pointer items-center rounded-md border border-transparent py-2 px-1 transition-transform duration-500 hover:scale-105 hover:border-white/10 hover:bg-zinc-900/20"
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
              <time className="text-md mt-2 pl-3">{article.date}</time>
            </div>
            <p className="mt-2 line-clamp-2">{article.description}</p>
            <Link
              href={article.slug}
              className="mt-2 flex items-center text-amber-600"
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
        </article>
      ))}
      <div className="flex w-fit items-center border-b-2 border-solid border-amber-600">
        <Link href="/blog" className="dark:text-textLight">
          Ver todos los artículos
        </Link>
        <Image
          src="/assets/img/svg/chevron-right.svg"
          alt="Todos los artículos"
          width="17"
          height="17"
        />
      </div>
    </main>
  );
}
