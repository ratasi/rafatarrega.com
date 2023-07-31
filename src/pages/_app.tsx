import "@/styles/globals.css";
import "@/styles/post.css";
import NextNProgress from 'nextjs-progressbar';
import 'atropos/css'
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress color="#365999" />
      <Component {...pageProps} />
    </>
  )
}
