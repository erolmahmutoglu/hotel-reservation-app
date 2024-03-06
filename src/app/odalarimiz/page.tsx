import { PageContainer } from "@/components/RoomDetailsPage";
import { ROOMS_DETAILS } from "@/lib/data";
import OurRooms from "@/components/RoomDetailsPage/OurRooms";
import { OUR_ROOMS_CONTENT } from "@/lib/pageContent/OurRoomsContent";

type RoomType = "superior-oda" | "deluxe-oda" | "aile-odasi";
interface PageParameters {
  searchParams: { roomType: RoomType | RoomType[] };
}

const RoomsPage = ({ searchParams }: PageParameters) => {
  const room = ROOMS_DETAILS.find(
    (room) => room.name === searchParams.roomType
  );

  if (!room) {
    return <OurRooms {...OUR_ROOMS_CONTENT} />;
  }

  return <PageContainer {...room} />;
};

export default RoomsPage;
