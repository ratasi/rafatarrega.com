import Image from "next/image";
import Link from "next/link";
import { dataCourses } from "./Cursos.data";

export function CursosPage() {
  return (
    <main className="px-5 mt-5 max-w-7xl lg:mt-20 lg:pr-10">
      <h1 className="text-5xl text-textLight">Todos mis cursos</h1>

      <div className="grid grid-cols-2 mt-10 gap-y-16 gap-x-6 lg:grid-cols-4">
        {dataCourses.map(({ name, thumbnail, description, links }) => (
          <div
            key={name}
            className="relative flex flex-wrap px-3 py-5 transition-transform duration-500 border border-transparent rounded-lg bg:border-white/10 hover:scale-105 hover:border-white/10 hover:bg-zinc-900/20"
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
            <p className="mt-3 text-md text-zinc-400 line-clamp-2">
              {description}
            </p>
            <div className="flex justify-between mt-5">
              {links.map(({ icon, link }) => (
                <div key={link}>
                  <Link href={link} target="_blank" rel="noreferrer" className="absolute bottom-0 right-0 w-full h-full" />
                  <div className="flex items-center w-full px-5 py-2 text-center transition-transform duration-500 rounded-md shadowButtonDark bg-zinc-800 hover:scale-105">
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
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
