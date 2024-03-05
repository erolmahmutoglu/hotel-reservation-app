import { SectionHeader } from "..";
import FeaturedRoomCard from "../Homepage/FeaturedRooms/FeaturedRoomCard";

import { FEATURED_ROOMS } from "@/lib/data";

const OtherRoomOptions = () => {
  return (
    <section className="w-full flex flex-col items-center justify-start gap-8 mt-32">
      <SectionHeader
        pretitle="Diğer Oda Seçeneklerimiz"
        title="Birbirinden Farklı Konaklama Seçenekleri"
        orientation="center"
        subtitle=""
      />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-2">
        {FEATURED_ROOMS.map((room, index) => (
          <FeaturedRoomCard key={index} {...room} shorted />
        ))}
      </div>
    </section>
  );
};

export default OtherRoomOptions;
