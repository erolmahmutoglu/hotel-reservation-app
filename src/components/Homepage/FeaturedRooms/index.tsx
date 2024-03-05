import { SectionHeader } from "@/components";
import FeaturedRoomCard from "./FeaturedRoomCard";

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
      "Deluxe Oda 55 m2dir. Cepheden deniz manzaralı odalarda, 1 çift kişilik geniş yatak, 49” LG 4K TV,  kanepe, duş, tuvalet, çift lavabo ve giyinme alanı, terasda koltuk ve jakuzi bulunuyor.",
  },
];

const FeaturedRooms = () => {
  return (
    <section className="w-full flex flex-col items-center justify-start gap-8 mt-32">
      <SectionHeader
        pretitle="Öne Çıkan Odalarımız"
        title="Ev Konforunda Konaklama Deneyimi"
        orientation="center"
        subtitle=""
      />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredRooms.map((room, index) => (
          <FeaturedRoomCard key={index} {...room} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedRooms;
