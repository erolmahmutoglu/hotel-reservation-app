export const ROOMS_DETAILS = [
  {
    id: 1,
    name: "superior-oda",
    images: [
      "/images/hotel-images/rooms/superior/1.jpg",
      "/images/hotel-images/rooms/superior/2.jpg",
      "/images/hotel-images/rooms/superior/3.jpg",
    ],
    roomDetails: {
      title: "Superior Oda",
      basicInfo: {
        area: 45,
        bedCount: 3,
        capacity: 4,
      },
      description:
        "Superior odalar 45 m² büyüklüğünde. Tam deniz manzaralı odalarda çift kişilik geniş bir yatak veya tek kişilik iki ayrı yatak, 49” LG 4K televizyon, 1 sofa, ahşap zemin, kanepe, çalışma masası, ütü ve ütü masası, banyoda duş, tuvalet, çift lavabo, giyinme bölümü, balkon ve balkonda koltuk bulunuyor.",
      facilities: [
        "wifi",
        "coffeeMachine",
        "airConditioner",
        "mountainView",
        "noSmoking",
        "ironing",
        "safe",
      ],
    },
  },
  {
    id: 2,
    name: "aile-odasi",
    images: [
      "/images/hotel-images/rooms/family/1.jpg",
      "/images/hotel-images/rooms/family/2.jpg",
      "/images/hotel-images/rooms/family/3.jpg",
    ],
    roomDetails: {
      title: "Aile Odası",
      basicInfo: {
        area: 65,
        bedCount: 8,
        capacity: 6,
      },
      description:
        "Deniz Manzaralı Aile odaları 65 m² büyüklüğünde. Odalarda çift kişilik iki yatak ve tek kişilik dört ayrı yatak bulunuyor. Ayrıca iki lavabo, giyinme bölümü ve balkonda koltuk mevcut.",
      facilities: [
        "wifi",
        "coffeeMachine",
        "bathTub",
        "airConditioner",
        "seaView",
        "beachAccess",
        "noSmoking",
        "ironing",
        "safe",
      ],
    },
  },
  {
    id: 3,
    name: "deluxe-oda",
    images: [
      "/images/hotel-images/rooms/deluxe/1.jpg",
      "/images/hotel-images/rooms/deluxe/2.jpg",
      "/images/hotel-images/rooms/deluxe/3.jpg",
    ],
    roomDetails: {
      title: "Deluxe Oda",
      basicInfo: {
        area: 55,
        bedCount: 1,
        capacity: 2,
      },
      description:
        "Deluxe Oda 55 m2dir. Cepheden deniz manzaralı odalarda, 1 çift kişilik geniş yatak, 49” LG 4K TV,  kanepe, duş, tuvalet, çift lavabo ve giyinme alanı, terasda koltuk ve jakuzi bulunuyor.",
      facilities: [
        "wifi",
        "coffeeMachine",
        "bathTub",
        "airConditioner",
        "seaView",
        "beachAccess",
        "smoking",
        "ironing",
        "safe",
      ],
    },
  },
];

export const FEATURED_ROOMS = [
  {
    image: "/images/hotel-images/rooms/superior/1.jpg",
    title: "Superior Oda",
    roomType: "superior-oda",
    description:
      "Superior odalar 45 m² büyüklüğünde. Tam deniz manzaralı odalarda çift kişilik geniş bir yatak veya tek kişilik iki ayrı yatak, 1 sofa, ahşap zemin, kanepe ve balkonda koltuk bulunuyor.",
    targetLink: "/odalarimiz?roomType=superior-oda",
    targetLinkLabel: "Detayları Gör",
  },
  {
    image: "/images/hotel-images/rooms/family/1.jpg",
    title: "Aile Odası",
    roomType: "aile-odasi",
    description:
      "Aile odaları 65 m² büyüklüğünde. Odalarda çift kişilik iki yatak ve tek kişilik dört ayrı yatak bulunuyor. Ayrıca iki lavabo, giyinme bölümü ve balkonda koltuk mevcut.",
    targetLink: "/odalarimiz?roomType=aile-odasi",
    targetLinkLabel: "Detayları Gör",
  },
  {
    image: "/images/hotel-images/rooms/deluxe/2.jpg",
    title: "Deluxe Oda",
    roomType: "deluxe-oda",
    description:
      "Deluxe Oda 55 m2dir. Cepheden deniz manzaralı odalarda, 1 çift kişilik geniş yatak, 49” LG 4K TV,  kanepe, duş, tuvalet, giyinme alanı, terasda koltuk ve jakuzi bulunuyor.",
    targetLink: "/odalarimiz?roomType=deluxe-oda",
    targetLinkLabel: "Detayları Gör",
  },
];
