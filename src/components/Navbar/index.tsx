import NavbarItem from "./NavbarItem";

interface NavbarProps {
  navbarItems: { href: string; label: string }[];
}

const Navbar = ({ navbarItems }: NavbarProps) => {
  return (
    <nav className="hidden md:flex justify-between items-center gap-2 lg:gap-8 py-4">
      {navbarItems.map((item) => (
        <NavbarItem key={item.href} href={item.href} label={item.label} />
      ))}
    </nav>
  );
};

export default Navbar;
