import { SectionHeader } from "@/components";
import FeaturedRoomCard from "./FeaturedRoomCard";

interface FeaturedRoomProps {
  header: {
    pretitle: string;
    title: string;
    subtitle: string;
  };
  rooms: {
    image: string;
    roomType: string;
    title: string;
    description: string;
    targetLink: string;
    targetLinkLabel: string;
  }[];
}

const FeaturedRooms = ({
  header: { pretitle, title, subtitle },
  rooms,
}: FeaturedRoomProps) => {
  return (
    <section className="w-full flex flex-col items-center justify-start gap-8 mt-32">
      <SectionHeader
        pretitle={pretitle}
        title={title}
        orientation="center"
        subtitle={subtitle}
      />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-2">
        {rooms.map((room, index) => (
          <FeaturedRoomCard key={index} {...room} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedRooms;
