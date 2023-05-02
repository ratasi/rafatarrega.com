import Link from "next/link";
import { useRouter } from "next/router";
import { dataNavbar } from "./Navbar.data";

export const Navbar = () => {
  const { route } = useRouter();

  return (
    <header className="px-1 pt-3 lg:px-5 lg:pt-6">
      <nav className="mx-auto flex max-w-md content-center justify-evenly rounded-full border border-zinc-400 text-sm text-zinc-400	transition hover:text-white ">
        {route !== "/" && (
          <Link
            href="/"
            className="flex items-center p-2 hover:bg-slate-600	hover:text-amber-400"
          >
            🏠
          </Link>
        )}
        {dataNavbar.map((data) => (
          <Link
            key={data.id}
            href={data.link}
            className="flex items-center	rounded-md px-2 py-1 text-center transition duration-500 hover:bg-slate-600 hover:text-amber-400 md:m-1"
          >
            {data.name}
          </Link>
        ))}
      </nav>
    </header>
  );
};
