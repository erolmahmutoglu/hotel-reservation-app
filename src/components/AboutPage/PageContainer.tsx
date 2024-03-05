import { MainTitle } from "..";
import SectionContainer from "./SectionContainer";

interface SectionContainer {
  pretitle: string;
  title: string;
  subtitle: string;
  image: string;
}

interface PageContainerProps {
  pageTitle: {
    title: string;
    description: string;
  };
  aboutDesign: SectionContainer;
  aboutFoods: SectionContainer;
  aboutSpa: SectionContainer;
}

const PageContainer = ({
  pageTitle,
  aboutDesign,
  aboutFoods,
  aboutSpa,
}: PageContainerProps) => {
  return (
    <section className="flex min-h-screen w-full flex-col items-center justify-start py-4 mb-48 gap-24">
      <MainTitle title={pageTitle.title} description={pageTitle.description} />
      <SectionContainer
        pretitle={aboutDesign.pretitle}
        title={aboutDesign.title}
        subtitle={aboutDesign.subtitle}
        image={aboutDesign.image}
      />
      <SectionContainer
        pretitle={aboutFoods.pretitle}
        title={aboutFoods.title}
        subtitle={aboutFoods.subtitle}
        image={aboutFoods.image}
      />
      <SectionContainer
        pretitle={aboutSpa.pretitle}
        title={aboutSpa.title}
        subtitle={aboutSpa.subtitle}
        image={aboutSpa.image}
      />
    </section>
  );
};

export default PageContainer;
