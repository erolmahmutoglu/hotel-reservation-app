import { redirect } from "next/navigation";

import { PageContainer } from "@/components/RoomDetailsPage";
import { ROOMS_DETAILS } from "@/lib/data";

type RoomType = "superior-oda" | "deluxe-oda" | "aile-odasi";
interface PageParameters {
  searchParams: { roomType: RoomType | RoomType[] };
}

const RoomsPage = ({ searchParams }: PageParameters) => {
  const room = ROOMS_DETAILS.find(
    (room) => room.name === searchParams.roomType
  );

  if (!room) {
    redirect("/404");
  }

  return <PageContainer {...room} />;
};

export default RoomsPage;
