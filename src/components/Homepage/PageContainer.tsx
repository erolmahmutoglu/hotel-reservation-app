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
}

const PageContainer = ({ sliderImages, pageTitle }: PageContainerProps) => {
  return (
    <section className="flex min-h-screen w-full flex-col items-center justify-start py-4">
      <CustomSlider
        images={sliderImages}
        classes="w-full h-[450px]"
        sliderInterval={6000}
        pauseOnHover
        slide
      />
      <MainTitle title={pageTitle.title} description={pageTitle.description} />
      <AboutUs />
      <Rooms />
      <FeaturedRooms />
    </section>
  );
};

export default PageContainer;
