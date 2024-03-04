import { LuBedDouble, LuBedSingle, LuUsers, LuScan } from "react-icons/lu";
import { CustomPopover } from "../UI/CustomUIComponents";
import RoomDetails from "./RoomDetails";
import { IFeatures } from "@/lib/types";

interface RoomCardTitleProps {
  features: IFeatures;
}

const RoomCardTitle = ({
  features: {
    title,
    beds,
    guests,
    squareMeters,
    details,
    detailedRoomPhotoUrl,
  },
}: RoomCardTitleProps) => {
  return (
    <div className="flex flex-col items-start justify-start gap-3 h-[200px] w-[300px] p-1 ">
      <h2 className="text-xl font-bold tracking-wide">{title}</h2>
      <ul className="flex flex-col gap-2">
        <li className="flex items-center justify-start gap-2">
          <LuScan className="text-xl font-bold" />
          <p className="text-sm font-medium">{squareMeters} m²</p>
        </li>
        <li className="flex items-center justify-start gap-2">
          <LuUsers className="text-xl font-bold" />
          <p className="text-sm font-medium">{guests} Misafir</p>
        </li>
        {beds.double > 0 && (
          <li className="flex items-center justify-start gap-2">
            <LuBedDouble className="text-xl font-bold" />
            <p className="text-sm font-medium">
              {beds.double > 0 && `${beds.double} Çift Kişilik`}
            </p>
          </li>
        )}
        {beds.single > 0 && (
          <li className="flex items-center justify-start gap-2">
            <LuBedSingle className="text-xl font-bold" />
            <p className="text-sm font-medium">{beds.single} Tek Kişilik</p>
          </li>
        )}
      </ul>
      <div className="flex justify-between items-center">
        <CustomPopover
          trigger={
            <button className="w-full py-2 px-4 text-xs font-bold text-white bg-yellow-400 rounded-md">
              Oda Detayları
            </button>
          }
          classes="w-[350px] xl:w-[700px]  min-h-72 bg-yellow-50 rounded-lg"
        >
          <RoomDetails
            title={title}
            detailedRoomPhotoUrl={detailedRoomPhotoUrl}
            details={details}
          />
        </CustomPopover>
      </div>
    </div>
  );
};

export default RoomCardTitle;
