import BrandLogo from "./BrandLogo";

interface HeaderProps {
  logo: string;
}

const Header = ({ logo }: HeaderProps) => {
  return (
    <header className="w-full flex items-center justify-center bg-white shadow-md sticky top-0 left-0 z-20">
      <div className="relative md:container mx-auto flex items-center justify-between w-full h-24 px-4 md:px-8">
        <BrandLogo logo={logo} alt="otelfiyat.com" />
      </div>
    </header>
  );
};

export default Header;
