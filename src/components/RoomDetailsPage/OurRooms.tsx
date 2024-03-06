import { MainTitle, SectionHeader } from "..";
import SectionContainer from "../AboutPage/SectionContainer";
import OtherRoomOptions from "../RoomDetailsPage/OtherRoomOptions";

interface OurRoomsProps {
  header: {
    pretitle: string;
    title: string;
    subtitle: string;
  };
  image: string;
}

const OurRooms = ({
  header: { pretitle, title, subtitle },
  image,
}: OurRoomsProps) => {
  return (
    <section className="flex min-h-screen w-full flex-col items-center justify-start py-4 mb-36">
      <MainTitle title="Odalarımız" />
      <SectionContainer
        pretitle={pretitle}
        title={title}
        subtitle={subtitle}
        image={image}
      />
      <OtherRoomOptions />
    </section>
  );
};

export default OurRooms;
