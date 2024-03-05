import { PageContainer } from "@/components/AboutPage";

const AboutUsPage = () => {
  return (
    <PageContainer
      pageTitle={{
        title: "Hakkımızda",
        description:
          "Bodrum'un en güzel koylarından biri olan Torba Koyu'nda bulunan Inn Bodrum Hotel, denize sıfır konumu, özel plajı ve yüzme havuzu ile misafirlerine eşsiz bir tatil deneyimi sunuyor. Tesisin modern ve şık dekorasyonlu odalarında konaklayarak, deniz manzaralı balkonlarda keyifli bir tatil geçirebilirsiniz.",
      }}
      aboutDesign={{
        pretitle: "Özel Tasarım Odalarımız",
        title: "Herkesin hayalini süsleyecek bir yaşam alanı...",
        subtitle:
          "Bodrum'un kalbinde, Ege'nin berrak sularının kıyısında yer alan otelimiz, unutulmaz bir tatil deneyimi sunmak için sizleri bekliyor. Misafirlerimize huzur dolu bir atmosfer sunan ve modern konforla buluşan tesisimiz, yerel mimarinin zarafetiyle tasarlanmıştır.",
        image: "/images/hotel-images/about-page/1.jpg",
      }}
      aboutFoods={{
        pretitle: "Konsept Restoranlar",
        title: "Damak Tadınıza Uygun Yemekler",
        subtitle:
          "Tesisimizdeki restoranımızda, deniz mahsullerinin taze lezzetlerini ve yöresel lezzetleri keşfedin. Şeflerimizin ustalığıyla hazırlanan özel menüler, damak zevkinize hitap edecek. Ayrıca, otelimizdeki barımızda günün yorgunluğunu atarken ferahlatıcı içeceklerin tadını çıkarabilirsiniz.",
        image: "/images/hotel-images/about-page/2.jpg",
      }}
      aboutSpa={{
        pretitle: "Rahatlamak İçin",
        title: "Huzur Veren Spa",
        subtitle:
          "Otelimizdeki spa merkezimizde, vücudunuzu ve ruhunuzu dinlendirecek özel bakımlar ve masajlar sunulmaktadır. Profesyonel terapistlerimiz, sizlere özel olarak hazırlanan bakım programları ile huzur dolu bir tatilin keyfini çıkarmanızı sağlayacak.",
        image: "/images/hotel-images/about-page/3.jpg",
      }}
    />
  );
};

export default AboutUsPage;
