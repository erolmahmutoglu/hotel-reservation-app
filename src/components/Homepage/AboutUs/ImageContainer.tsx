import { createAltText } from "@/lib/createAltText";
import Image from "next/image";

interface ImageContainerProps {
  image1: string;
  image2: string;
  image3: string;
}

const ImageContainer = ({ image1, image2, image3 }: ImageContainerProps) => {
  return (
    <div className="flex items-center justify-between gap-1 w-full lg:w-3/5 h-96">
      <div className="relative w-1/2 h-96">
        <div className="absolute bottom-0 right-0 sm:right-2 w-44 sm:w-52  h-80">
          <Image
            className="rounded-2xl absolute top-0 left-0 z-10"
            src={image1}
            alt={createAltText(image1)}
            fill
          />
        </div>
      </div>
      <div className="relative w-1/2 h-full">
        <div className="absolute top-0 left-0 sm:left-2 w-44 sm:w-52 h-52">
          <Image
            className="rounded-2xl absolute top-0 left-0 z-10"
            src={image2}
            alt={createAltText(image2)}
            fill
          />
        </div>
        <div className="absolute top-56 left-0 sm:left-2 w-44 sm:w-52 h-28">
          <Image
            className="rounded-2xl absolute top-0 left-0 z-10"
            src={image3}
            alt={createAltText(image3)}
            fill
          />
        </div>
      </div>
    </div>
  );
};

export default ImageContainer;
