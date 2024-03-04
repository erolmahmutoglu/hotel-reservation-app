import { CustomSlider } from "../UI/CustomUIComponents";

interface RoomCardProps {
  images: string[];
}

const RoomCard = ({ images }: RoomCardProps) => {
  return (
    <article className="w-full flex items-center justify-start gap-4 p-3 bg-white rounded-2xl shadow-lg">
      <div className="w-[300px] h-[200px]">
        <CustomSlider
          images={images}
          width="[300px]"
          height="[200px]"
          slide={false}
        />
      </div>
    </article>
  );
};

export default RoomCard;
