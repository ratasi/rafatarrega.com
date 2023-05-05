import Image from "next/image";
import Link from "next/link";
import { dataCourses } from "./LastCourses.data";

export function LastCourses() {
  return (
    <aside className="lg:pl-5">
      <h3 className="text-2xl dark:text-textLight">Últimos cursos</h3>
      <div className="grid gap-x-10 gap-y-5 lg:grid-cols-2">
        {dataCourses.map(({ name, links, thumbnail, description }) => (
          <div key={name} className="relative p-2 mt-6 transition-transform duration-500 border border-transparent rounded-md cursor-pointer hover:scale-105 hover:border-white/10 hover:bg-zinc-900/20">
            <div className="">
              <Image
                src={`/assets/img/jpg/courses/${thumbnail}-thumbnail.jpeg`}
                alt={`Curso ${name}`}
                width="300"
                height="100"
                className="rounded-xl"
              />
            </div>
            <div className="mt-3 dark:text-textLight">
              <p className="font-bold text-md ">{name}</p>
              <p className="block h-10 mt-2 text-sm line-clamp-2">
                {description}
              </p>
            </div>

            <div className="flex justify-between mt-5">
              {links.map(({ icon, link, name }) => (
                <div key={link}>
                  <Link href={link} target="_blank" className="absolute bottom-0 right-0 w-full h-full" />
                  <div className="shadowButtonDark flex h-[30px] items-center rounded-md bg-zinc-800 p-2  transition-transform duration-500 hover:scale-105">
                    <Image
                      src={`/assets/img/svg/${icon}.svg`}
                      alt={name}
                      width="20"
                      height="20"
                    />
                    <span className="ml-2 text-textLight hover:text-zinc-400">
                      {name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="relative px-6 py-2 mt-10 transition duration-500 border-2 border-solid rounded-md w-fit border-textLight hover:scale-105 hover:bg-[#38bdf8]">
        <Link href="/cursos" className="absolute bottom-0 right-0 w-full h-full dark:text-textLight" />

        <div className="flex items-center ">
          <p className="text-textLight">Ver todos los cursos disponibles</p>
          <Image
            src="/assets/img/svg/chevron-right.svg"
            alt="Todos los artículos"
            width="17"
            height="17"
          />
        </div>
      </div>
    </aside>
  );
}
