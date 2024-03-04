import Image from "next/image";

import { createAltText } from "@/lib/createAltText";
import { Carousel } from "flowbite-react";

interface CustomSliderProps {
  images: string[];
  sliderInterval?: number;
  pauseOnHover?: boolean;
  slide?: boolean;
  classes?: string;
}

const CustomSlider = ({
  images,
  slide = true,
  sliderInterval = 6000,
  pauseOnHover = true,
  classes = "w-full h-[450px]",
}: CustomSliderProps) => {
  const containerClassess = `${classes} flex rounded-2xl border-2 overflow-hidden mx-auto`;

  return (
    <section className={containerClassess}>
      <Carousel
        theme={{
          control: {
            base: "inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-50/60 group-hover:bg-white/50 group-focus:outline-none  group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-slate-300/60 dark:group-focus:ring-slate-300/70",
            icon: "h-5 w-5 text-black dark:text-slate-300",
          },
        }}
        slideInterval={sliderInterval}
        pauseOnHover={pauseOnHover}
        slide={slide}
      >
        {images.map((image, index) => (
          <div key={index} className="flex relative w-full h-full">
            <Image
              className="object-cover w-full h-full"
              src={image}
              alt={createAltText(image)}
              fill
              placeholder="blur"
              blurDataURL="/images/loader.gif"
            />
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default CustomSlider;
