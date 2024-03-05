import Link from "next/link";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

import { SectionHeader } from "@/components";
import ImageContainer from "./ImageContainer";

interface AboutUsProps {
  header: {
    pretitle: string;
    title: string;
    subtitle: string;
  };
  targetLink: string;
  targetLinkLabel: string;
  images: {
    image1: string;
    image2: string;
    image3: string;
  };
}

const AboutUs = ({
  header: { pretitle, title, subtitle },
  targetLink,
  targetLinkLabel,
  images,
}: AboutUsProps) => {
  return (
    <section className="w-full flex flex-col lg:flex-row items-start justify-center gap-8 lg:gap-4 py-8 mt-32 bg-green-100 rounded-xl">
      <div className="flex w-full lg:w-2/5 items-start justify-start">
        <div className="flex flex-col gap-4 items-start justify-start w-full">
          <SectionHeader
            pretitle={pretitle}
            title={title}
            subtitle={subtitle}
          />
          <Link className="self-end" href={targetLink}>
            <div className="group flex items-center justify-center gap-2  border-2 border-green-500 hover:bg-green-500 text-slate-700 font-semibold text-lg py-3 px-5 rounded-xl me-4">
              <span className="text-green-500 group-hover:text-white">
                {targetLinkLabel}
              </span>
              <ArrowLongRightIcon className="h-8 w-8 text-green-500 group-hover:text-white" />
            </div>
          </Link>
        </div>
      </div>
      <ImageContainer {...images} />
    </section>
  );
};

export default AboutUs;
