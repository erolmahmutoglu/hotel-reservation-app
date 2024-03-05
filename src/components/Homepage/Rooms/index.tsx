import { SectionHeader } from "@/components";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

const Rooms = () => {
  return (
    <section className="w-full flex flex-col lg:flex-row items-start justify-center gap-8 lg:gap-4 rounded-2xl mt-32">
      <div className="flex flex-col gap-4 items-start justify-start w-full">
        <SectionHeader
          pretitle="Rahatınız İçin"
          title="Tatilinizin Keyfini Çıkarın"
          subtitle="
            Otelimiz, modern tasarımlı ve konforlu odalarıyla Bodrum'un merkezinde konuklarına hizmet veriyor. Her odada özenle düşünülmüş detaylar ve rahat bir konaklama deneyimi sunuyoruz. Misafirlerimiz, şehrin kalbinde bulunmalarına rağmen, dinlendirici bir atmosferde kusursuz bir konaklama yaşayacaklar."
        />
        <Link className="self-end" href="/odalarimiz">
          <div className="group flex items-center justify-center gap-2  border-2 border-green-500 hover:bg-green-500 text-slate-700 font-semibold text-lg py-3 px-5 rounded-xl me-4">
            <span className="text-green-500 group-hover:text-white">
              Odalarımızı Keşfedin
            </span>
            <ArrowLongRightIcon className="h-8 w-8 text-green-500 group-hover:text-white" />
          </div>
        </Link>
      </div>
      <div className="flex justify-center items-center gap-4 w-full h-full px-2">
        <Image
          className="rounded-xl"
          src="/images/hotel-images/room-types/1.jpg"
          width={600}
          height={400}
          alt=""
        />
      </div>
    </section>
  );
};

export default Rooms;
