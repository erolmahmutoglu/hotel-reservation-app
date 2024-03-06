import { Separator } from "@/components/UI/separator";
import { createAltText } from "@/lib/createAltText";
import { LOADER_BASE64 } from "@/lib/data";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

interface FeaturedRoomCardProps {
  image: string;
  title: string;
  description: string;
  roomType: string;
  targetLink: string;
  targetLinkLabel: string;
  shorted?: boolean;
}
const FeaturedRoomCard = ({
  image,
  title,
  description,
  targetLink,
  targetLinkLabel,
  shorted = false,
}: FeaturedRoomCardProps) => {
  return (
    <Link href={targetLink}>
      <article className="group w-full max-w-[500px] mx-auto  rounded-xl border border-slate-200 shadow-md cursor-pointer overflow-hidden grid grid-cols-1 items-stretch">
        <div className="w-full h-1/2">
          <Image
            className="rounded-t-xl object-cover object-center mb-4 hover:scale-105 transition-all duration-300"
            src={image}
            alt={createAltText(title)}
            width={500}
            height={300}
            placeholder="blur"
            blurDataURL={LOADER_BASE64}
          />
        </div>
        <div className="w-full  rounded-b-xl flex flex-col items-start justify-end gap-2 p-4">
          <h3 className="text-slate-800 font-semibold text-2xl mb-1">
            {title}
          </h3>
          {shorted ? (
            <Separator className="my-4 bg-slate-300" />
          ) : (
            <p className="text-slate-700 text-md leading-loose">
              {description}
            </p>
          )}

          <div className="w-full flex items-center justify-center gap-2 group-hover:translate-x-1 transition-all duration-300 bg-yellow-400 rounded-xl">
            <p className="text-white text-md font-semibold p-4">
              {targetLinkLabel}
            </p>
            <ArrowLongRightIcon className="w-8 h-8 text-white" />
          </div>
        </div>
      </article>
    </Link>
  );
};

export default FeaturedRoomCard;
