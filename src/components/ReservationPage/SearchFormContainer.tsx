import Image from "next/image";

import { ReservationForm } from "..";
import { createAltText } from "@/lib/createAltText";
import { LOADER_BASE64 } from "@/lib/data";

const SearchFormContainer = () => {
  return (
    <section className="relative w-full flex flex-col items-center justify-center gap-4 mt-8">
      <h1 className="absolute top-28 md:top-60  text-3xl md:text-4xl font-black  text-center text-green-500 bg-slate-50 py-3 px-8 h-16 rounded-xl z-20 text-nowrap">
        Rezervasyon Yap
      </h1>
      <div className="flex relative rounded-xl overflow-hidden w-full h-[400px] ">
        <Image
          className="object-cover w-full h-full rounded-xl"
          src="/images/hotel-images/banner/8.jpeg"
          alt={createAltText("/images/hotel-images/banner/8.jpeg")}
          fill
          placeholder="blur"
          blurDataURL={LOADER_BASE64}
        />
      </div>
      <div className="absolute flex flex-col items-center justify-center w-full h-full bg-gradient-to-t from-slate-800 to-transparent  top-0 left-0 z-10 rounded-xl" />
      <div className="absolute bottom-[-30px] z-20">
        <ReservationForm />
      </div>
    </section>
  );
};

export default SearchFormContainer;
