import Head from "next/head";
import { HeaderSeoProps } from "./HeaderSeo.types";

export const HeaderSeo = (props: HeaderSeoProps) => {
  const { title, description } = props;

  return (
    <Head>
      <title>{title ? title : "Rafa Tárrega • TarreDev"}</title>
      <meta
        name="description"
        content={description ? description : "Desarrollador Frontend"}
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <meta property="og:locale" content="es_ES" />
      <meta property="og:site_name" content="rafatarrega.com" />
    </Head>
  );
};
