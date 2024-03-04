import { HeaderRightSide, Navbar } from "..";
import BrandLogo from "./BrandLogo";

interface HeaderProps {
  logo: string;
  navbarItems: { href: string; label: string }[];
}

const Header = ({ logo, navbarItems }: HeaderProps) => {
  return (
    <header className="w-full flex items-center justify-center bg-white shadow-md sticky top-0 left-0 z-50">
      <div className="relative md:container mx-auto flex items-center justify-between w-full h-24 px-4 md:px-8">
        <BrandLogo logo={logo} alt="otelfiyat.com" />
        <div className="flex place-items-center gap-2 lg:gap-8">
          <Navbar navbarItems={navbarItems} />
          <HeaderRightSide />
        </div>
      </div>
    </header>
  );
};

export default Header;
