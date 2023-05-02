import { HeaderSeo } from "@/components/HeaderSeo";
import Link from "next/link";

export default function Page404() {
  return (
    <>
      <HeaderSeo
        title="Error 404 - Not found"
        description="Página de error 404 - TarreDev"
      />
      <div className="mt-10 min-h-[75vh] px-5 text-center lg:mt-20	">
        <h1 className="text-5xl text-textLight">
          UPS! Parece que te has equivocado 😕
        </h1>
        <h2 className="mx-auto mt-4 mb-10 max-w-lg text-2xl text-textLight">
          Si no has encontrado lo que buscas puedes dejármelo en cualquier red
          social y lo intentaré arreglar lo antes posible 😄
        </h2>
        <Link href="/">
          <div className="shadowButtonDark mx-auto flex max-w-max items-center justify-center rounded-md bg-zinc-800 py-2 px-10">
            <span className="  text-lg text-textLight hover:text-zinc-400">
              Volver a la home
            </span>
          </div>
        </Link>
      </div>
    </>
  );
}
