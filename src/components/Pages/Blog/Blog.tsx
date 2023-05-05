import { BlogProps } from "@/types/Blog.types";
import fn from "@/utils/fn";
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
    <main className="max-w-4xl px-5 mt-5 lg:mt-20 lg:pr-10">
      <h1 className="text-4xl font-bold text-textLight">
        Artículos sobre programación
      </h1>
      <div className="mt-10 md:border-l md:border-zinc-900/10 md:pl-6 md:dark:border-white/10">
        {articles.map((article) => (
          <article
            key={article.slug}
            className="block my-5 cursor-pointer md:flex md:space-x-8 "
            onClick={() => linkRouter(article.slug)}
          >
            <p className="mt-4 min-w-[100px] text-sm text-zinc-400">
              {fn.formatDate(article.date)}
            </p>
            <div className="flex items-start w-full p-4 mb-10 transition-transform duration-500 border border-transparent rounded-md bg:border-white/10 text-textLight hover:scale-105 hover:border-white/10 hover:bg-zinc-900/20">
              <Image src={article.logo} alt={`Imagen artículo ${article.title}`} width="75" height="75" className="pt-3 pr-5" />
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
    <div>
      <p className="text-lg font-bold ">{article.title}</p>
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
        className="flex items-center mt-4 text-amber-600"
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
  );
}
