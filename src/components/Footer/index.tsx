import Contact from "./Contact";
import QuickLinks from "./QuickLinks";
import TitleAndSocialLinks from "./TitleAndSocialLinks";

interface FooterProps {
  title: {
    about: string;
    fbLink: string;
    igLink: string;
    ytLink: string;
  };
  contact: {
    address: string;
    email: string;
    phone: string;
  };
}

const Footer = ({ title, contact }: FooterProps) => {
  return (
    <footer className="w-full py-12 px-6 bg-green-100 shadow-xl shadoe-sky-300">
      <section className="md:container mx-auto flex flex-col md:flex-row items-start justify-start gap-12 ">
        <TitleAndSocialLinks {...title} />
        <div className="flex-1 flex flex-col md:flex-row items-start justify-start gap-12 ">
          <QuickLinks />
          <Contact {...contact} />
        </div>
      </section>
    </footer>
  );
};

export default Footer;
