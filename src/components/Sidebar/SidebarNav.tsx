import {
  EnvelopeIcon,
  HomeIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";

import SidebarNavItem from "./SidebarNavItem";

const links = [
  { value: "Anasayfa", link: "/", icon: HomeIcon },
  {
    value: "Hakkımızda",
    link: "/hakkimizda",
    icon: RocketLaunchIcon,
  },
  { value: "İletişim", link: "/iletisim", icon: EnvelopeIcon },
];

const SidebarNav = () => {
  return (
    <nav className="flex flex-col gap-2 w-[350px]">
      {links.map((link, index) => (
        <SidebarNavItem
          key={index}
          label={link.value}
          href={link.link}
          icon={<link.icon className="w-8 h-8 text-green-500" />}
        />
      ))}
    </nav>
  );
};

export default SidebarNav;
