import { BlogProps } from "@/types/Blog.types";
import { LastArticles } from "./LastArticles";
import { LastCourses } from "./LastCourses";
import { PhotoTab } from "./PhotoTab";
import { ProfileDescription } from "./ProfileDescription";

export const HomePage = (props: BlogProps) => {
  const { articles } = props;

  return (
    <>
      <div className="max-w-6xl px-5 mx-auto mt-10 lg:mt-20 lg:pr-10">
        <div className="grid mt-10 lg:mt-20 lg:grid-cols-2">
          <div className="p-6 rounded-lg border-white/10 bg-zinc-900/20 w-fit">
            <PhotoTab />
            <ProfileDescription />
          </div>
          <div className="flex items-center max-w-2xl">
            <h2 className="text-5xl font-bold leading-[48px] text-textLight w-fit ">Desarrollador frontend, instructor en Udemy y creador de contenido</h2>
          </div>
        </div>
        <div className="grid mt-10 lg:mt-20 lg:grid-cols-2 gap-x-3">
          <LastArticles articles={articles} />
          <LastCourses />
        </div>
      </div>
    </>
  );
};
