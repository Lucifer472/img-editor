import Image from "next/image";
import Link from "next/link";

interface PreviewCardProps {
  link: string;
  img: string;
  name: string;
}

export const PreviewCard = ({ link, img, name }: PreviewCardProps) => {
  return (
    <div className="w-80 bg-white shadow-md rounded-md">
      <Link
        href={link}
        className="flex flex-col items-center justify-center gap-y-2 p-2 w-full"
      >
        <Image
          src={img}
          alt="Dummy Png"
          width={500}
          height={500}
          className="object-contain h-80"
        />
        <h2 className="w-full text-center text-2xl font-medium">{name}</h2>
      </Link>
    </div>
  );
};
