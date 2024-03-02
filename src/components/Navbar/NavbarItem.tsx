import Link from "next/link";

interface NavbarItemProps {
  href: string;
  label: string;
}

const NavbarItem = ({ href, label }: NavbarItemProps) => {
  return (
    <Link href={href}>
      <span className="text-lg font-semibold tracking-wider cursor-pointer text-gray-800 px-4 pt-2 pb-1 transition-all duration-100 ease-in hover:text-red-500 hover:underline underline-offset-8">
        {label}
      </span>
    </Link>
  );
};

export default NavbarItem;
