import { MainTitle } from "..";
import { CustomSlider } from "../UI/CustomUIComponents";
import AboutUs from "./AboutUs";
import FeaturedRooms from "./FeaturedRooms";
import Rooms from "./Rooms";

interface PageContainerProps {
  sliderImages: string[];
  pageTitle: {
    title: string;
    description: string;
  };
  aboutUs: {
    header: {
      pretitle: string;
      title: string;
      subtitle: string;
    };
    targetLink: string;
    targetLinkLabel: string;
    images: {
      image1: string;
      image2: string;
      image3: string;
    };
  };
  rooms: {
    header: {
      pretitle: string;
      title: string;
      subtitle: string;
    };
    targetLink: string;
    targetLinkLabel: string;
    image: string;
  };
  featuredRooms: {
    header: {
      pretitle: string;
      title: string;
      subtitle: string;
    };
    rooms: {
      image: string;
      roomType: string;
      title: string;
      description: string;
      targetLink: string;
      targetLinkLabel: string;
    }[];
  };
}

const PageContainer = ({
  sliderImages,
  pageTitle,
  aboutUs,
  rooms,
  featuredRooms,
}: PageContainerProps) => {
  return (
    <section className="flex min-h-screen w-full flex-col items-center justify-start py-4 mb-36">
      <CustomSlider
        images={sliderImages}
        classes="w-full h-[450px]"
        sliderInterval={6000}
        pauseOnHover
        slide
      />
      <MainTitle {...pageTitle} />
      <AboutUs {...aboutUs} />
      <Rooms {...rooms} />
      <FeaturedRooms {...featuredRooms} />
    </section>
  );
};

export default PageContainer;
