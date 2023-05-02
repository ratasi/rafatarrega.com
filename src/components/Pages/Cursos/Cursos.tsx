import Image from "next/image";
import Link from "next/link";
import { dataCourses } from "./Cursos.data";

export function CursosPage() {
  return (
    <main className="mt-5 max-w-7xl px-5 lg:mt-20 lg:pr-10">
      <h1 className="text-5xl text-textLight">Todos mis cursos</h1>

      <div className="mt-10 grid grid-cols-1 gap-y-16 gap-x-6 lg:grid-cols-4">
        {dataCourses.map(({ name, thumbnail, description, links }) => (
          <div
            key={name}
            className="bg:border-white/10 rounded-lg border border-transparent px-3 py-5 transition-transform duration-500 hover:scale-105 hover:border-white/10 hover:bg-zinc-900/20"
          >
            <Image
              src={`/assets/img/jpg/courses/${thumbnail}-thumbnail.jpeg`}
              alt={`Curso ${name}`}
              width="400"
              height="400"
              className="rounded-lg"
            />
            <h3 className="mt-3 min-h-[65px] text-2xl text-textLight">
              {name}
            </h3>
            <p className=" text-md mt-3 text-zinc-400 line-clamp-2">
              {description}
            </p>
            <div className="mt-5 flex justify-between">
              {links.map(({ icon, link }) => (
                <Link href={link} key={link} target="_blank" rel="noreferrer">
                  <div className="shadowButtonDark flex w-full items-center rounded-md bg-zinc-800 px-5 py-2 text-center transition-transform duration-500 hover:scale-105">
                    <Image
                      src={`/assets/img/svg/${icon}.svg`}
                      alt={name}
                      width="20"
                      height="20"
                    />
                    <span className="ml-2 text-textLight hover:text-zinc-400 ">
                      Curso Udemy
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
