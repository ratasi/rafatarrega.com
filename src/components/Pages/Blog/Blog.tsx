import { BlogProps } from "@/types/Blog.types";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export function BlogPage(props: BlogProps) {
  const { articles } = props;
  const router = useRouter();

  const linkRouter = (link: string) => {
    router.push(`/blog/${link}`);
  };

  return (
    <main className="mt-5 max-w-4xl px-5 lg:mt-20 lg:pr-10">
      <h1 className="text-4xl font-bold text-textLight">
        Artículos sobre programación
      </h1>
      <div className="mt-10 md:border-l md:border-zinc-900/10 md:pl-6 md:dark:border-white/10">
        {articles.map((article) => (
          <article
            key={article.slug}
            className="my-5 block cursor-pointer  md:flex md:space-x-8"
            onClick={() => linkRouter(article.slug)}
          >
            <p className="mt-4 min-w-[100px] text-sm text-zinc-400">
              {article.date}
            </p>
            <div className="bg:border-white/10 mb-10 w-full rounded-md border border-transparent  p-4 text-textLight	transition-transform duration-500 hover:scale-105 hover:border-white/10 hover:bg-zinc-900/20">
              <InfoExtra article={article} />
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}

function InfoExtra({ article }: any) {
  return (
    <>
      <p className=" text-lg font-bold">{article.title}</p>
      <p className="mb-2 text-sm">{article.description}</p>
      <div className="flex text-zinc-400">
        {article.tags.map((tag: any) => (
          <p key={tag} className="mr-4">
            #{tag}{" "}
          </p>
        ))}
      </div>
      <Link
        href={`/blog/${article.slug}`}
        className="mt-4 flex items-center text-amber-600"
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
    </>
  );
}
