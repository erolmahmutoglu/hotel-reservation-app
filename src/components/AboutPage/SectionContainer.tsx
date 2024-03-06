import Image from "next/image";
import { SectionHeader } from "..";
import { createAltText } from "@/lib/createAltText";
import { LOADER_BASE64 } from "@/lib/data";

interface SectionContainerProps {
  pretitle: string;
  title: string;
  subtitle: string;
  image: string;
}

const SectionContainer = ({
  pretitle,
  title,
  subtitle,
  image,
}: SectionContainerProps) => {
  return (
    <section className="w-full flex flex-col lg:flex-row items-start justify-center gap-8 lg:gap-4 rounded-2xl mt-32">
      <SectionHeader pretitle={pretitle} title={title} subtitle={subtitle} />
      <div className="flex justify-center items-center gap-4 w-full h-full">
        <Image
          className="rounded-xl"
          src={image}
          width={600}
          height={400}
          alt={createAltText(title)}
          placeholder="blur"
          blurDataURL={LOADER_BASE64}
        />
      </div>
    </section>
  );
};

export default SectionContainer;
