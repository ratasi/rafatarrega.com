import { BlogProps } from "@/types/Blog.types";
import { LastArticles } from "./LastArticles";
import { LastCourses } from "./LastCourses";
import { PhotoTab } from "./PhotoTab";
import { ProfileDescription } from "./ProfileDescription";

export const HomePage = (props: BlogProps) => {
  const { articles } = props;

  return (
    <>
      <div className="mt-10 max-w-7xl px-5 lg:mt-20 lg:pr-10">
        <PhotoTab />
        <ProfileDescription />
        <div className="mt-10 grid lg:mt-20 lg:grid-cols-2">
          <LastArticles articles={articles} />
          <LastCourses />
        </div>
      </div>
    </>
  );
};
