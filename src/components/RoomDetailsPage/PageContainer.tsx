import OtherRoomOptions from "./OtherRoomOptions";
import { MainTitle } from "..";
import RoomDetailCard from "./RoomDetailCard";
import { IRoomDetails } from "@/lib/types";

const PageContainer = (props: IRoomDetails) => {
  return (
    <section className="flex min-h-screen w-full flex-col items-center justify-start py-4 mb-36">
      <MainTitle title="Oda Detayları" />
      <RoomDetailCard {...props} />
      <OtherRoomOptions />
    </section>
  );
};

export default PageContainer;
