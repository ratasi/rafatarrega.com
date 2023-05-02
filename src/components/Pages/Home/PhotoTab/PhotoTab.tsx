import Image from "next/image";

export const PhotoTab = () => {
  return (
    <Image
      src="/assets/img/jpg/profile-pic.png"
      alt="Rafa Tárrega - TarreDev"
      width="100"
      height="100"
      className="rounded-full"
    />
  );
};
