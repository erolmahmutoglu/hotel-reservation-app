import { PageContainer } from "@/components/Homepage";
import { HOMEPAGE_CONTENT } from "@/lib/pageContent/HomepageContent";
import { FEATURED_ROOMS } from "@/lib/data";

export default function Homepage() {
  return (
    <PageContainer
      sliderImages={HOMEPAGE_CONTENT.sliderImages}
      pageTitle={HOMEPAGE_CONTENT.pageTitle}
      aboutUs={HOMEPAGE_CONTENT.aboutUs}
      rooms={HOMEPAGE_CONTENT.rooms}
      featuredRooms={{
        ...HOMEPAGE_CONTENT.featuredRooms,
        rooms: FEATURED_ROOMS,
      }}
    />
  );
}
