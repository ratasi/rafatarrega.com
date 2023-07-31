import Image from "next/image";
import Link from "next/link";
import { dataRecomendations } from "./Recomendations.data";
import Atropos from 'atropos/react';

export function RecomendationsPage() {
  return (
    <main className="px-5 mt-5 lg:mt-20 lg:pr-10">
      <h1 className="max-w-4xl text-4xl font-bold text-textLight">
        El software que uso, los dispositivos me encantan, podcast que escucho y
        otras cosas que recomiendo
      </h1>
      <h3 className="max-w-4xl mt-4 text-zinc-400">
        Las cosas que uso para crear webs, mantenerme productivo o comprar para
        engañarme y pensar que estoy siendo productivo cuando en realidad solo
        estoy procrastinando. Aquí hay una gran lista de todas mis cosas
        favoritas. Algunas recomendaciones pueden contener enlaces de
        afilidados.
      </h3>
      <div className="mt-10 max-w-7xl">
        {dataRecomendations.map((data) => (
          <section
            className="my-10 md:border-l md:border-white/10 md:pl-6"
            key={data.id}
          >
            <h3 className="my-6 text-textLight">{data.name}</h3>
            <div className="grid grid-cols-2 gap-x-5 md:grid-cols-5">
              {data.values.map((value) => (
                <Atropos
                  key={value.name}
                  highlight={false}
                  activeOffset={20}
                  shadowScale={0.5}
                  className="relative w-full p-4 mb-10 transition-transform duration-500 border rounded-lg border-white/10 bg-zinc-900/20 text-textLight "
                >
                  <Image
                    src={value.image}
                    alt="test"
                    width="90"
                    height="90"
                    className="m-auto rounded-lg"
                  />
                  <p className="mt-3 text-sm text-center text-textLight line-clamp-2">
                    {value.name}
                  </p>
                  <Link
                    href={value.url}
                    className="absolute bottom-0 right-0 w-full h-full"
                    target="_blank"
                    rel="noreferrer"
                  />
                </Atropos>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
