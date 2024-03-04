import { RoomCard } from "..";

const AvailableRoomsContainer = () => {
  return (
    <section className="w-full flex flex-col place-items-start gap-4 bg-white rounded-xl min-h-[705px] mb-24">
      <RoomCard
        images={[
          "/images/hotel-images/rooms/superior/1.jpg",
          "/images/hotel-images/rooms/superior/2.jpg",
          "/images/hotel-images/rooms/superior/3.jpg",
        ]}
        features={{
          title: "Superior Oda",
          detailedRoomPhotoUrl: "/images/hotel-images/rooms/superior/2.jpg",
          details:
            "Superior odalar 45 m² büyüklüğünde. Tam deniz manzaralı odalarda çift kişilik geniş bir yatak veya tek kişilik iki ayrı yatak, 49” LG 4K televizyon, 1 sofa, ahşap zemin, kanepe, çalışma masası, ütü ve ütü masası, banyoda duş, tuvalet, çift lavabo, giyinme bölümü, balkon ve balkonda koltuk bulunuyor.",

          beds: {
            single: 1,
            double: 1,
          },
          guests: 4,
          squareMeters: 45,
        }}
        accomodationDetails={{
          accomodation: "Her Şey Dahil",
          seaView: true,
          cancelFree: true,
          cigarette: false,
        }}
        reservationDetails={{
          nights: 7,
          nightlyPrice: 150,
          discountRate: 10,
          totalPrice: 1050,
          discountedTotalPrice: 945,
          currency: "TRY",
        }}
      />
      <RoomCard
        images={[
          "/images/hotel-images/rooms/superior/1.jpg",
          "/images/hotel-images/rooms/superior/2.jpg",
          "/images/hotel-images/rooms/superior/3.jpg",
        ]}
        features={{
          title: "Superior Oda",
          detailedRoomPhotoUrl: "/images/hotel-images/rooms/superior/2.jpg",
          details:
            "Superior odalar 45 m² büyüklüğünde. Tam deniz manzaralı odalarda çift kişilik geniş bir yatak veya tek kişilik iki ayrı yatak, 49” LG 4K televizyon, 1 sofa, ahşap zemin, kanepe, çalışma masası, ütü ve ütü masası, banyoda duş, tuvalet, çift lavabo, giyinme bölümü, balkon ve balkonda koltuk bulunuyor.",

          beds: {
            single: 1,
            double: 1,
          },
          guests: 4,
          squareMeters: 45,
        }}
        accomodationDetails={{
          accomodation: "Her Şey Dahil",
          seaView: true,
          cancelFree: true,
          cigarette: false,
        }}
        reservationDetails={{
          nights: 7,
          nightlyPrice: 150,
          discountRate: 10,
          totalPrice: 1050,
          discountedTotalPrice: 945,
          currency: "TRY",
        }}
      />
      <RoomCard
        images={[
          "/images/hotel-images/rooms/superior/1.jpg",
          "/images/hotel-images/rooms/superior/2.jpg",
          "/images/hotel-images/rooms/superior/3.jpg",
        ]}
        features={{
          title: "Superior Oda",
          detailedRoomPhotoUrl: "/images/hotel-images/rooms/superior/2.jpg",
          details:
            "Superior odalar 45 m² büyüklüğünde. Tam deniz manzaralı odalarda çift kişilik geniş bir yatak veya tek kişilik iki ayrı yatak, 49” LG 4K televizyon, 1 sofa, ahşap zemin, kanepe, çalışma masası, ütü ve ütü masası, banyoda duş, tuvalet, çift lavabo, giyinme bölümü, balkon ve balkonda koltuk bulunuyor.",

          beds: {
            single: 1,
            double: 1,
          },
          guests: 4,
          squareMeters: 45,
        }}
        accomodationDetails={{
          accomodation: "Her Şey Dahil",
          seaView: true,
          cancelFree: true,
          cigarette: false,
        }}
        reservationDetails={{
          nights: 7,
          nightlyPrice: 150,
          discountRate: 10,
          totalPrice: 1050,
          discountedTotalPrice: 945,
          currency: "TRY",
        }}
      />
    </section>
  );
};

export default AvailableRoomsContainer;
