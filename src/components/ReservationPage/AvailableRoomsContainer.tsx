"use client";
import { useAppSelector } from "../../lib/redux/hooks";
import { RoomCard } from "..";

const AvailableRoomsContainer = () => {
  const rooms = useAppSelector((state) => state.roomsSelector.rooms);
  const isLoading = useAppSelector((state) => state.roomsSelector.isLoading);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="w-full flex flex-col place-items-start gap-4 bg-white rounded-xl min-h-[705px] mb-24">
      {rooms.map((room) => (
        <RoomCard key={room.id} {...room} />
      ))}
    </section>
  );
};

export default AvailableRoomsContainer;
