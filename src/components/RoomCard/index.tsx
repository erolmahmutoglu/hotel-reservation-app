import { CustomSlider } from "../UI/CustomUIComponents";
import AccomodationDetails from "./AccomodationDetails";
import ReservationDetails from "./ReservationDetails";
import RoomCardTitle from "./RoomCardTitle";

interface RoomCardProps {
  images: string[];
  features: {
    title: string;
    squareMeters: number;
    guests: number;
    beds: {
      single: number;
      double: number;
    };

    details: string;
  };
  accomodationDetails: {
    accomodation: string;
    seaView: boolean;
    cancelFree: boolean;
    cigarette: boolean;
  };
  reservationDetails: {
    nights: number;
    nightlyPrice: number;
    discountRate: number;
    totalPrice: number;
    discountedTotalPrice: number;
    currency: string;
  };
}

const RoomCard = ({
  images,
  features,
  accomodationDetails,
  reservationDetails,
}: RoomCardProps) => {
  return (
    <article className="flex w-[350px] mx-auto md:w-[700px] xl:w-full flex-col md:flex-row md:flex-wrap items-center justify-start gap-4 p-3 bg-white rounded-2xl shadow-lg">
      <div className="w-[300px] h-[200px]">
        <CustomSlider
          images={images}
          classes="w-[300px] h-[200px]"
          slide={false}
        />
      </div>
      <RoomCardTitle features={features} />
      <div className="flex flex-col md:flex-row gap-1">
        <AccomodationDetails accomodationDetails={accomodationDetails} />
        <ReservationDetails reservationDetails={reservationDetails} />
      </div>
    </article>
  );
};

export default RoomCard;
