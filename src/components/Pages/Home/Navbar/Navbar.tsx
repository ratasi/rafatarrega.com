import Link from "next/link";
import { useRouter } from "next/router";
import { dataNavbar } from "./Navbar.data";

export const Navbar = () => {
  const { route } = useRouter();

  return (
    <header className="max-w-3xl px-1 pt-3 mx-auto lg:px-5 lg:pt-6">
      <nav className="flex content-center justify-center mx-auto text-sm transition duration-500 border rounded-lg border-white/10 bg-zinc-900/20 text-textLight ">
        {route !== "/" && (
          <Link
            href="/"
            className="flex items-center px-2 py-2 transition duration-500 rounded-md md:py-0 md:px-3 hover:bg-slate-600 hover:text-amber-400 md:m-1"
          >
            🏠
          </Link>
        )}
        {dataNavbar.map((data) => (
          <Link
            key={data.id}
            href={data.link}
            className="flex items-center px-2 py-3 text-center transition duration-500 rounded-md md:py-2 md:px-5 hover:bg-slate-600 hover:text-amber-400 md:m-1"
          >
            {data.name}
          </Link>
        ))}
      </nav>
    </header>
  );
};
