import { PageContainer } from "@/components/Homepage";

export default function Homepage() {
  return (
    <PageContainer
      sliderImages={[
        "/images/hotel-images/banner/1.jpeg",
        "/images/hotel-images/banner/2.jpeg",
        "/images/hotel-images/banner/3.jpeg",
        "/images/hotel-images/banner/4.jpeg",
        "/images/hotel-images/banner/5.jpeg",
        "/images/hotel-images/banner/6.jpeg",
        "/images/hotel-images/banner/7.jpeg",
      ]}
      pageTitle={{
        title: "Inn Bodrum",
        description:
          "Bodrum'un en güzel koylarından biri olan Torba Koyu'nda bulunan Inn Bodrum Hotel, denize sıfır konumu, özel plajı ve yüzme havuzu ile misafirlerine eşsiz bir tatil deneyimi sunuyor. Tesisin modern ve şık dekorasyonlu odalarında konaklayarak, deniz manzaralı balkonlarda keyifli bir tatil geçirebilirsiniz.",
      }}
    />
  );
}
