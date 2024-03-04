import { LuBadgeDollarSign } from "react-icons/lu";

interface ReservationDetailsProps {
  reservationDetails: {
    nights: number;
    nightlyPrice: number;
    discountRate: number;
    totalPrice: number;
    discountedTotalPrice: number;
    currency: string;
  };
}

const ReservationDetails = ({
  reservationDetails: {
    nights,
    nightlyPrice,
    discountRate,
    totalPrice,
    discountedTotalPrice,
    currency,
  },
}: ReservationDetailsProps) => {
  return (
    <div className="flex flex-col items-start justify-center gap-3 h-[200px] min-w-[330px] p-4 bg-green-100 rounded-2xl"></div>
  );
};

export default ReservationDetails;
