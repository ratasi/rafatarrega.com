import Link from "next/link";
import Image from "next/image";
import { dataSocialNetworks } from "./SocialNetworks.data";

export const SocialNetworks = () => {
  return (
    <div className="mt-6 flex items-center justify-start gap-6">
      {dataSocialNetworks.map(({ link, icon }) => (
        <Link
          key={link}
          href={link}
          target="_blank"
          className="transition-transform duration-500 hover:scale-110"
        >
          <Image
            src={`/assets/img/svg/${icon}.svg`}
            alt={link}
            width="35"
            height="35"
          />
        </Link>
      ))}
    </div>
  );
};
