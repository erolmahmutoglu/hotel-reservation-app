import { Bars3Icon } from "@heroicons/react/24/outline";

const HamburgerMenu = () => {
  return (
    <div className="flex md:hidden items-center justify-center">
      <Bars3Icon className="w-12 h-12 cursor-pointer" />
    </div>
  );
};

export default HamburgerMenu;
