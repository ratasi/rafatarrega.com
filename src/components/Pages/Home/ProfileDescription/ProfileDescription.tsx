import { SocialNetworks } from "./SocialNetworks";

export const ProfileDescription = () => {
  return (
    <div className="max-w-md mt-6 ">
      <h1 className="text-3xl font-bold text-textLight">
        Rafa Tárrega
      </h1>
      <h2 className="text-xl font-bold text-textLight">@TarreDev</h2>
      <div className="flex items-center px-2 py-1 mt-3 border rounded-md w-fit border-zinc-200">
        <span className="mr-1.5 flex h-3 w-3 items-center">
          <span className="absolute inline-flex w-2 h-2 rounded-full opacity-75 animate-ping bg-lime-400"></span>
          <span className="relative inline-flex w-2 h-2 rounded-full bg-lime-400"></span>
        </span>
        <span className="text-xs font-semibold text-textLight">
          Disponible para nuevos proyectos
        </span>
      </div>
      <SocialNetworks />
    </div>
  );
};
