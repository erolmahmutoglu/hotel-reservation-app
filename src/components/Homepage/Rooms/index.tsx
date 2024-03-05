import Image from "next/image";
import Link from "next/link";

import { SectionHeader } from "@/components";
import { createAltText } from "@/lib/createAltText";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

interface RoomsProps {
  header: {
    pretitle: string;
    title: string;
    subtitle: string;
  };
  targetLink: string;
  targetLinkLabel: string;
  image: string;
}

const Rooms = ({
  header: { pretitle, title, subtitle },
  targetLink,
  targetLinkLabel,
  image,
}: RoomsProps) => {
  return (
    <section className="w-full flex flex-col lg:flex-row items-start justify-center gap-8 lg:gap-4 rounded-2xl mt-32">
      <div className="flex flex-col gap-4 items-start justify-start w-full">
        <SectionHeader pretitle={pretitle} title={title} subtitle={subtitle} />
        <Link className="self-end" href={targetLink}>
          <div className="group flex items-center justify-center gap-2  border-2 border-green-500 hover:bg-green-500 text-slate-700 font-semibold text-lg py-3 px-5 rounded-xl me-4">
            <span className="text-green-500 group-hover:text-white">
              {targetLinkLabel}
            </span>
            <ArrowLongRightIcon className="h-8 w-8 text-green-500 group-hover:text-white" />
          </div>
        </Link>
      </div>
      <div className="flex justify-center items-center gap-4 w-full h-full px-2">
        <Image
          className="rounded-xl"
          src={image}
          width={600}
          height={400}
          alt={createAltText("Bir oda içerisindeki yatak ve oturma alanı")}
          placeholder="blur"
          blurDataURL="/images/loader.gif"
        />
      </div>
    </section>
  );
};

export default Rooms;
