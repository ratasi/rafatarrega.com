import { SocialNetworks } from "./SocialNetworks";

export const ProfileDescription = () => {
  return (
    <div className="mt-6 max-w-md ">
      <h1 className="text-3xl font-bold text-textLight">Rafa Tárrega</h1>
      <h3 className="text-xl font-bold text-textLight">@tarreDev</h3>
      <div className="mt-3 flex w-fit items-center rounded-md border border-zinc-200 px-2 py-1">
        <span className="mr-1.5 flex h-3 w-3 items-center">
          <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-lime-400 opacity-75"></span>
          <span className="relative inline-flex h-2 w-2 rounded-full bg-lime-400"></span>
        </span>
        <span className="text-xs font-semibold text-textLight">
          Disponible para nuevos proyectos
        </span>
      </div>
      <SocialNetworks />
    </div>
  );
};
