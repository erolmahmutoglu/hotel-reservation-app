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
  quickLinks: {
    links: { href: string; label: string }[];
  };
}

const Footer = ({ title, quickLinks, contact }: FooterProps) => {
  return (
    <footer className="w-full py-12 px-6 bg-green-100 shadow-xl shadow-green-400">
      <section className="md:container mx-auto flex flex-col md:flex-row items-start justify-start gap-12 ">
        <TitleAndSocialLinks {...title} />
        <div className="flex-1 flex flex-col md:flex-row items-start justify-start gap-12 ">
          <QuickLinks {...quickLinks} />
          <Contact {...contact} />
        </div>
      </section>
    </footer>
  );
};

export default Footer;
