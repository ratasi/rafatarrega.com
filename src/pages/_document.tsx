import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="es">
      <Head />
      <body
        className="mx-auto min-h-screen max-w-7xl 
       bg-bgDark bg-[url('/assets/img/svg/gradient-bg.svg')] bg-top bg-no-repeat"
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
