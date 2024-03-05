import { PageContainer } from "@/components/AboutPage";
import { ABOUT_US_PAGE_CONTENT } from "@/lib/pageContent/aboutUsPage";

const AboutUsPage = () => {
  return (
    <PageContainer
      pageTitle={ABOUT_US_PAGE_CONTENT.pageTitle}
      aboutDesign={ABOUT_US_PAGE_CONTENT.aboutDesign}
      aboutFoods={ABOUT_US_PAGE_CONTENT.aboutFoods}
      aboutSpa={ABOUT_US_PAGE_CONTENT.aboutSpa}
    />
  );
};

export default AboutUsPage;
