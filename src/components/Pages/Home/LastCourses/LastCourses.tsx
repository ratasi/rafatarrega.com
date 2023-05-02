import Image from "next/image";
import Link from "next/link";
import { dataCourses } from "./LastCourses.data";

export function LastCourses() {
  return (
    <aside className="lg:pl-5">
      <h3 className="text-2xl dark:text-textLight">Últimos cursos</h3>
      <div className="grid gap-x-10 gap-y-5 lg:grid-cols-2">
        {dataCourses.map(({ name, links, thumbnail, description }) => (
          <div key={name} className="mt-6">
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
              <p className="text-md font-bold ">{name}</p>
              <p className="mt-2 block h-10 text-sm line-clamp-2">
                {description}
              </p>
            </div>

            <div className="mt-5 flex justify-between">
              {links.map(({ icon, link, name }) => (
                <Link href={link} key={link} target="_blank">
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
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 flex w-fit items-center border-b-2 border-solid border-[#38bdf8]">
        <Link href="/cursos" className="dark:text-textLight">
          Ver todos los cursos disponibles
        </Link>
        <Image
          src="/assets/img/svg/chevron-right.svg"
          alt="Todos los artículos"
          width="17"
          height="17"
        />
      </div>
    </aside>
  );
}
