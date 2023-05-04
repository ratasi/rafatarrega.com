

import fn from "@/utils/fn";
import Image from "next/image";
import { useRouter } from "next/router";
import { Footer } from "../Footer";
import { HeadPost } from "../HeadPost";
import { PostLayoutProps } from "./PostLayout.types";

export function PostLayout(props: PostLayoutProps) {
  const { children, metaSeo } = props;
  const router = useRouter();

  return (
    <>
      <HeadPost metaSeo={metaSeo} />
      <div className="mt-6 lg:relative lg:mt-32">
        <div className="max-w-2xl px-4 mx-auto">
          <button
            type="button"
            onClick={() => router.back()}
            aria-label="Ir atrás al blog"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-700/50 bg-zinc-800  shadow-md shadow-zinc-800/5 transition  hover:border-zinc-700 hover:ring-white/20  lg:absolute lg:-left-5 lg:-top-1.5 lg:mb-0 lg:-mt-2 "
          >
            <Image
              src="/assets/img/svg/arrow-left.svg"
              alt="Volver atrás"
              width="17"
              height="17"
            />
          </button>

          <article>
            <time className="flex items-center mt-4 text-md text-zinc-500">
              <span className="h-4 w-0.5 rounded-full bg-zinc-500"></span>
              <span className="ml-3">{fn.formatDate(metaSeo.date)}</span>
            </time>
            <h1 className="mt-4 text-4xl font-bold text-textLight">
              {metaSeo.title}
            </h1>
            <div className="flex">
              {metaSeo.tags.map((tag) => (
                <p key={tag} className="mr-5 text-zinc-600">
                  # {tag}
                </p>
              ))}
            </div>
          </article>
          <div className="mt-4 prose container-post dark:prose-invert text-zinc-900 dark:text-white">
            {children}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
