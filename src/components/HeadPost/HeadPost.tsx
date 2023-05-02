import Head from "next/head";
import { HeadPostProps } from "./HeadPost.types";

export function HeadPost(props: HeadPostProps) {
  const { metaSeo } = props;
  const { author, date, title, slug, keywords, description } = metaSeo;

  return (
    <Head>
      <title>{`${title} - TarreDev`}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta
        property="og:image"
        content={`https://rafatarrega.com/api/og?title=${title}`}
      />
      <meta
        property="og:url"
        content={`https://rafatarrega.com/blog/${slug}`}
      />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={`${title} - TarreDev`} />
      <meta property="og:description" content={description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="rafatarrega.com" />
      <meta
        property="twitter:url"
        content={`https://rafatarrega.com/blog/${slug}`}
      />
      <meta name="twitter:title" content={`${title} - TarreDev`} />
      <meta name="twitter:description" content={description} />
      <meta
        name="twitter:image"
        content={`https://rafatarrega.com/api/og?title=${title}`}
      />
    </Head>
  );
}
