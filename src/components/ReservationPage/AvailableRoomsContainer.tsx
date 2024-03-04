import { RoomCard } from "..";

const AvailableRoomsContainer = () => {
  return (
    <section className="w-full flex flex-col place-items-start gap-4">
      <RoomCard
        images={[
          "/images/hotel-images/rooms/superior/1.jpg",
          "/images/hotel-images/rooms/superior/2.jpg",
          "/images/hotel-images/rooms/superior/3.jpg",
        ]}
      />
      <RoomCard
        images={[
          "/images/hotel-images/rooms/family/1.jpg",
          "/images/hotel-images/rooms/family/2.jpg",
          "/images/hotel-images/rooms/family/3.jpg",
        ]}
      />
      <RoomCard
        images={[
          "/images/hotel-images/rooms/deluxe/1.jpg",
          "/images/hotel-images/rooms/deluxe/2.jpg",
          "/images/hotel-images/rooms/deluxe/3.jpg",
        ]}
      />
    </section>
  );
};

export default AvailableRoomsContainer;
