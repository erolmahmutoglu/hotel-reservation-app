export interface Room {
  id: number;
  images: string[];
  features: IFeatures;
  accomodationDetails: IAccomodationDetails;
  reservationDetails: IReservationDetails;
}
export interface Beds {
  single: number;
  double: number;
}

export interface IFeatures {
  title: string;
  squareMeters: number;
  guests: number;
  beds: Beds;
  detailedRoomPhotoUrl: string;
  details: string;
}

export interface IAccomodationDetails {
  accomodation: string;
  seaView: boolean;
  cancelFree: boolean;
  cigarette: boolean;
}

export interface IReservationDetails {
  nights: number;
  nightlyPrice: number;
  discountRate: number;
  totalPrice: number;
  discountedTotalPrice: number;
  currency: string;
}

export interface SearchFormValues {
  startDate: Date;
  endDate: Date;
  adults: number;
  children: number;
  infants: number;
  minPrice: number;
  maxPrice: number;
  cancelFree: boolean;
}

export interface IRoomDetails {
  images: string[];
  roomDetails: {
    title: string;
    basicInfo: {
      area: number;
      bedCount: number;
      capacity: number;
    };
    description: string;
    facilities: string[];
  };
}
