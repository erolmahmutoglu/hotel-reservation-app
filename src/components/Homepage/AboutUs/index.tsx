import { SectionHeader } from "@/components";
import ImageContainer from "./ImageContainer";
import Link from "next/link";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

const AboutUs = () => {
  return (
    <section className="w-full flex flex-col lg:flex-row items-start justify-center gap-4 py-8 mt-24">
      <div className="flex w-full lg:w-2/5 items-start justify-start">
        <div className="flex flex-col gap-4 items-start justify-start w-full ">
          <SectionHeader
            pretitle="Cennetin Kalbinde"
            title="Inn Bodrum Hotel"
            subtitle="Otelimiz, Bodrum'un sahilinde, berrak Ege Denizi'nin kıyısında yer alır. Özel plajı ve kristal berraklığındaki deniziyle tatilciler için mükemmel bir kaçış noktasıdır. Misafirlerimiz, sahildeki plajda güneşin ve denizin tadını çıkarırken, serinletici bir atmosferde dinlenme fırsatı bulacaklar."
          />
          <Link className="self-end" href="/hakkimizda">
            <div className="group flex items-center justify-center gap-2  border-2 border-green-500 hover:bg-green-500 text-slate-700 font-semibold text-lg py-3 px-5 rounded-xl">
              <span className="text-green-500 group-hover:text-white">
                Daha Fazla Bilgi
              </span>
              <ArrowLongRightIcon className="h-8 w-8 text-green-500 group-hover:text-white" />
            </div>
          </Link>
        </div>
      </div>
      <ImageContainer
        image1="/images/hotel-images/about-us/1.jpg"
        image2="/images/hotel-images/about-us/2.jpg"
        image3="/images/hotel-images/about-us/3.jpg"
      />
    </section>
  );
};

export default AboutUs;
