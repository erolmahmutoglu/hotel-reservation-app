import BrandLogo from "../Header/BrandLogo";
import SidebarNav from "./SidebarNav";

interface SidebarProps {
  title: string;
}

const Sidebar = ({ title }: SidebarProps) => {
  return (
    <aside className="grid grid-cols-1 gap-4 bg-background w-[350px]">
      <div className="flex items-start justify-center w-full">
        <BrandLogo logo="/svg/logo.svg" alt="Inn Bodrum" />
      </div>
      <h2 className="text-2xl font-extrabold text-yellow-400 p-2 text-center">
        {title}
      </h2>
      <SidebarNav />
    </aside>
  );
};

export default Sidebar;
