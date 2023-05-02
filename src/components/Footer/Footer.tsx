import Link from "next/link";

const dataFooter = [
  {
    name: "Github",
    link: "https://github.com/ratasi",
  },
  {
    name: "Twitter",
    link: "https://twitter.com/tarredev",
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/tarredev/?hl=es",
  },
  {
    name: "Tik Tok",
    link: "https://www.tiktok.com/@tarredev",
  },
  {
    name: "Youtube",
    link: "https://www.youtube.com/channel/UCYXgfyWaoV1BgbuQUuLQcCA",
  },
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/rafa-t%C3%A1rrega-a2b16713b/",
  },
];

export function Footer() {
  return (
    <div className=" my-5 border-t border-white/10 pt-5 lg:mt-20 lg:mb-10">
      <div className="mx-auto flex max-w-lg flex-wrap justify-evenly text-center lg:flex-nowrap	">
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
