import { IRoomDetails } from "@/lib/types";
import { CustomSlider } from "../UI/CustomUIComponents";
import RoomFacilities from "./RoomFacilities";

interface OutlinedInfoBadgeProps {
  value: string | number;
}
const OutlinedInfoBadge = ({ value }: OutlinedInfoBadgeProps) => {
  return (
    <span className="text-sm font-medium tracking-wide bg-green-100 rounded-2xl py-2 px-4 m-1">
      {value}
    </span>
  );
};

const RoomDetailCard = ({
  images,
  roomDetails: { title, basicInfo, description, facilities },
}: IRoomDetails) => {
  return (
    <div className="w-full flex flex-col lg:flex-row justify-between mt-10">
      <div className="flex-1">
        <CustomSlider
          images={images}
          classes="w-full h-[450px]"
          sliderInterval={6000}
          pauseOnHover
          slide
        />
      </div>
      <div className="flex flex-1 flex-col items-start justify-start gap-4 p-4">
        <h2 className="text-3xl font-bold text-center mb-4">{title}</h2>
        <div className="flex items-centerjustify-start">
          <OutlinedInfoBadge value={`${basicInfo.area} m²`} />
          <OutlinedInfoBadge
            value={
              basicInfo.bedCount === 1
                ? `${basicInfo.bedCount} yatak`
                : `${basicInfo.bedCount} yataklı`
            }
          />
          <OutlinedInfoBadge value={`${basicInfo.capacity} kişilik`} />
        </div>
        <p className="text-lg leading-loose mb-6">{description}</p>
        <RoomFacilities facilities={facilities} />
      </div>
    </div>
  );
};

export default RoomDetailCard;
