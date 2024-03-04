import { LuCreditCard } from "react-icons/lu";
import { CustomButton } from "../UI/CustomUIComponents";
import { IReservationDetails } from "@/lib/types";

interface ReservationDetailsProps {
  reservationDetails: IReservationDetails;
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
    <div className="flex flex-col items-end justify-start gap-1 h-[200px] min-w-[330px] py-4 px-8 bg-green-100 rounded-2xl">
      <p className="text-md font-medium">
        {nights} GECE x {nightlyPrice}
        {currency}
      </p>
      {discountRate && (
        <p className="text-sm text-white text-nowrap font-semibold px-3 py-1 bg-red-600 rounded-lg">
          % {discountRate} İndirim
        </p>
      )}
      <p className="text-md font-normal tracking-wide  line-through">
        {totalPrice} {currency}
      </p>
      <p className="text-xl font-bold">
        {discountedTotalPrice} {currency}
      </p>
      <CustomButton
        label="Rezervasyon Yap"
        icon={<LuCreditCard className="w-8 h-8 text-white" />}
      />
    </div>
  );
};

export default ReservationDetails;
