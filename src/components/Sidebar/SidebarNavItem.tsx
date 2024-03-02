import Link from "next/link";

interface SidebarNavItemProps {
  icon: React.ReactNode;
  label: string;
  href: string;
}

const SidebarNavItem = ({ icon, label, href }: SidebarNavItemProps) => {
  return (
    <div className="w-full h-12 text-md font-medium text-slate-500 bg-slate-100 hover:bg-slate-200 transition-colors duration-300 ease-in-out cursor-pointer rounded-md flex items-center justify-center gap-4">
      {icon}
      <Link href={href}>{label}</Link>
    </div>
  );
};

export default SidebarNavItem;
