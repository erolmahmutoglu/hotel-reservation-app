import { createAltText } from "@/lib/createAltText";
import Image from "next/image";

interface RoomDetailsProps {
  title: string;
  detailedRoomPhotoUrl: string;
  details: string;
}

const RoomDetails = ({
  title,
  detailedRoomPhotoUrl,
  details,
}: RoomDetailsProps) => {
  return (
    <div className="grid grid-cols-1 w-full min-h-72 ">
      <h3 className="text-2xl text-center font-bold tracking-wide">{title}</h3>
      <div className="grid grid-cols-2 gap-4 w-full h-full">
        <div className="h-full fw-full flex items-center justify-center">
          <Image
            className="rounded-lg"
            src={detailedRoomPhotoUrl}
            width={350}
            height={250}
            alt={createAltText(title)}
          />
        </div>
        <div className="h-full flex flex-col items-start justify-start gap-2">
          <p className="text-sm font-medium leading-loose">{details}</p>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
