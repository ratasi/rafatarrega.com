import Image from "next/image";
import Link from "next/link";
import { dataSocialNetworks } from "../Home/ProfileDescription/SocialNetworks/SocialNetworks.data";

export function SobreMiPage() {
  return (
    <main className="mx-auto min-h-[75vh] max-w-6xl">
      <div className="mt-5 lg:mt-20">
        <div className="justify-around 	md:flex lg:py-5">
          <div className=" flex-1 px-5">
            <h1 className="bold max-w-sm bg-gradient-to-r from-indigo-500 to-orange-500 bg-clip-text text-5xl font-bold text-textLight text-transparent">
              <i>
                Con código todo <span className="text-[5rem]">es posible</span>
              </i>
            </h1>
            <h2 className="max-w-sm pr-4 text-right text-2xl text-textLight">
              -TarreDev-
            </h2>
            <div className="mt-4 text-lg text-zinc-400">
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
              <Link href="/porfolio">
                <div className="shadowButtonDark mx-auto flex w-fit items-center rounded-md bg-zinc-800 px-5 py-2 transition-transform duration-500 hover:scale-105">
                  <Image
                    src={`/assets/img/svg/link.svg`}
                    alt="Link"
                    width="20"
                    height="20"
                  />
                  <span className="ml-2 text-textLight hover:text-zinc-400">
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
            <div className="mt-10 grid grid-cols-2 gap-y-4 ">
              {dataSocialNetworks.map(({ link, icon, name }) => (
                <Link
                  key={link}
                  href={link}
                  className="mx-auto flex items-center text-zinc-400 hover:text-white"
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
