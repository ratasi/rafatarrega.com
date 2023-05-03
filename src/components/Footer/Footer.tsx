import Link from "next/link";
import { dataFooter } from "./Footer.data";

export function Footer() {
  return (
    <div className="py-3 my-5 lg:mt-20 lg:mb-10 bg-[#181825] rounded-lg border-white/10 border-2">
      <div className="flex flex-wrap max-w-3xl mx-auto text-center justify-evenly lg:flex-nowrap ">
        {dataFooter.map(({ name, link }) => (
          <Link
            href={link}
            key={name}
            className="min-w-[100px] text-textLight transition-transform duration-500 hover:scale-110"
            target="_blank"
            rel="noreferrer"
          >
            {name}
          </Link>
        ))}
      </div>
    </div>
  );
}
