import { SectionHeader } from "..";
import FeaturedRoomCard from "../Homepage/FeaturedRooms/FeaturedRoomCard";

const featuredRooms = [
  {
    image: "/images/hotel-images/rooms/superior/1.jpg",
    title: "Superior Oda",
    roomType: "superior-oda",
    description:
      "Superior odalar 45 m² büyüklüğünde. Tam deniz manzaralı odalarda çift kişilik geniş bir yatak veya tek kişilik iki ayrı yatak, 1 sofa, ahşap zemin, kanepe ve balkonda koltuk bulunuyor.",
  },
  {
    image: "/images/hotel-images/rooms/family/1.jpg",
    title: "Aile Odası",
    roomType: "aile-odasi",
    description:
      "Aile odaları 65 m² büyüklüğünde. Odalarda çift kişilik iki yatak ve tek kişilik dört ayrı yatak bulunuyor. Ayrıca iki lavabo, giyinme bölümü ve balkonda koltuk mevcut.",
  },
  {
    image: "/images/hotel-images/rooms/deluxe/2.jpg",
    title: "Deluxe Oda",
    roomType: "deluxe-oda",
    description:
      "Deluxe Oda 55 m2dir. Cepheden deniz manzaralı odalarda, 1 çift kişilik geniş yatak, 49” LG 4K TV,  kanepe, duş, tuvalet, giyinme alanı, terasda koltuk ve jakuzi bulunuyor.",
  },
];

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
        {featuredRooms.map((room, index) => (
          <FeaturedRoomCard key={index} {...room} shorted />
        ))}
      </div>
    </section>
  );
};

export default OtherRoomOptions;
