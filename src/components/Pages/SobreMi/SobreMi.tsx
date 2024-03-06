import Image from "next/image";
import Link from "next/link";
import { dataSocialNetworks } from "../Home/ProfileDescription/SocialNetworks/SocialNetworks.data";

export function SobreMiPage() {
  return (
    <main className="mx-auto min-h-[75vh] max-w-6xl">
      <div className="mt-5 lg:mt-20">
        <div className="justify-around md:flex lg:py-5">
          <div className="flex-1 px-5 ">
            <h1 className="max-w-sm text-3xl font-bold text-transparent sm:text-5xl bold gradientText ">
              Con código todo <span className="">es posible</span>
            </h1>
            <h2 className="max-w-sm pr-4 text-2xl text-right text-textLight">
              -TarreDev-
            </h2>
            <div className="mt-4 text-lg text-textLight">
              <p>Llevando este lema por bandera, me presento.</p>

              <p>
                Soy Rafa Tarrega, desarrollador web con más de 5 años de
                experiencia en proyectos web y móviles que generen experiencias
                creados a partir de HTML, CSS, JavaScript y Frameworks como
                React.
              </p>
              <p className="mt-6">
                Me encanta lo que hago ya que me permite hacer mis ideas en
                proyectos tangentes y desarrollar mis habilidades creativas.
              </p>
              <p className="mt-6">
                ¿Buscas un desarrollador frontend con experiencia y habilidades
                probadas o aprender con cursos online?
              </p>
              <p className="my-6">Encuentra todos mis cursos disponibles</p>
              <Link href="/cursos">
                <div className="flex items-center px-5 py-2 mx-auto transition-transform duration-500 rounded-md shadowButtonDark w-fit bg-zinc-800 hover:scale-105">
                  <Image
                    src={`/assets/img/svg/link.svg`}
                    alt="Link"
                    width="20"
                    height="20"
                  />
                  <span className="ml-2 text-textLight ">
                    Cursos disponibles
                  </span>
                </div>
              </Link>
            </div>
          </div>
          <div className="flex-1 px-5 py-5 md:py-0">
            <Image
              src="/assets/img/jpg/rafa-tarrega.jpg"
              alt="Rafa Tárrega - TarreDev"
              width="500"
              height="500"
              className="mx-auto rounded-xl"
              priority
            />
            <div className="grid grid-cols-2 mt-10 gap-y-4 ">
              {dataSocialNetworks.map(({ link, icon, name }) => (
                <Link
                  key={link}
                  href={link}
                  className="flex items-center mx-auto text-white hover:text-zinc-400"
                  target="_blank"
                >
                  <Image
                    src={`/assets/img/svg/${icon}.svg`}
                    alt={link}
                    width="35"
                    height="35"
                  />
                  <p className="ml-2 text-sm"> {name}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
