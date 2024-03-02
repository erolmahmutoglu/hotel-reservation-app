import { Slider } from "@/components";

export default function Homepage() {
  return (
    <section className="flex min-h-screen w-full flex-col items-center justify-start py-4">
      <Slider
        images={[
          "/images/hotel-images/banner/1.jpeg",
          "/images/hotel-images/banner/2.jpeg",
          "/images/hotel-images/banner/3.jpeg",
          "/images/hotel-images/banner/4.jpeg",
          "/images/hotel-images/banner/5.jpeg",
          "/images/hotel-images/banner/6.jpeg",
          "/images/hotel-images/banner/7.jpeg",
        ]}
      />
    </section>
  );
}
