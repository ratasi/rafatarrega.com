import Image from "next/image";
import Link from "next/link";
import { dataCourses } from "./Cursos.data";
import Atropos from 'atropos/react';


export function CursosPage() {
  return (
    <main className="px-5 mt-5 max-w-7xl lg:mt-20 lg:pr-10">
      <h1 className="text-3xl sm:text-5xl text-textLight">Todos mis cursos</h1>

      <div className="grid sm:mt-10 gap-y-5 sm:gap-y-16 gap-x-6 lg:grid-cols-4">
        {dataCourses.map(({ name, thumbnail, description, links }) => (
          <Atropos
            key={name}
            className="relative flex flex-wrap px-3 py-5 "
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
          </Atropos>
        ))}
      </div>
    </main>
  );
}
