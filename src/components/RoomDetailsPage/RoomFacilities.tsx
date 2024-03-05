import {
  LuWifi,
  LuCoffee,
  LuBath,
  LuWaves,
  LuPalmtree,
  LuCigaretteOff,
  LuCigarette,
  LuMountainSnow,
} from "react-icons/lu";
import { TbIroning } from "react-icons/tb";
import { RiSafeLine } from "react-icons/ri";

interface FacilityItemProps {
  icon: React.ReactNode;
  text: string;
}

interface RoomFacilitiesProps {
  facilities: string[];
}

const items = [
  {
    name: "wifi",
    icon: <LuWifi className=" w-6 h-6 font-bold text-slate-900" />,
    text: "Ücretsiz Wi-Fi",
  },
  {
    name: "coffeeMachine",
    icon: <LuCoffee className=" w-6 h-6 font-bold text-slate-900" />,
    text: "Kahve Makinesi",
  },
  {
    name: "bathTub",
    icon: <LuBath className=" w-6 h-6 font-bold text-slate-900" />,
    text: "Küvet",
  },
  {
    name: "seaView",
    icon: <LuWaves className=" w-6 h-6 font-bold text-slate-900" />,
    text: "Deniz Manzarası",
  },
  {
    name: "mountainView",
    icon: <LuMountainSnow className=" w-6 h-6 font-bold text-slate-900" />,
    text: "Dağ Manzarası",
  },
  {
    name: "beachAccess",
    icon: <LuPalmtree className=" w-6 h-6 font-bold text-slate-900" />,
    text: "Sahile Erişim",
  },
  {
    name: "noSmoking",
    icon: <LuCigaretteOff className=" w-6 h-6 font-bold text-slate-900" />,
    text: "Sigara İçilmez",
  },
  {
    name: "smoking",
    icon: <LuCigarette className=" w-6 h-6 font-bold text-slate-900" />,
    text: "Sigara İçilebilir",
  },
  {
    name: "ironing",
    icon: <TbIroning className=" w-6 h-6 font-bold text-slate-900" />,
    text: "Ütü",
  },
  {
    name: "safe",
    icon: <RiSafeLine className=" w-6 h-6 font-bold text-slate-900" />,
    text: "Kasa",
  },
];

const FacilityItem = ({ icon, text }: FacilityItemProps) => {
  return (
    <div className="flex flex-col gap-1 items-center justify-center w-24">
      {icon}
      <p className="text-[12px] text-wrap text-center text-gray-600">{text}</p>
    </div>
  );
};

const RoomFacilities = ({ facilities }: RoomFacilitiesProps) => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-wrap gap-4">
        {items.map((item, index) =>
          facilities.includes(item.name) ? (
            <FacilityItem key={index} icon={item.icon} text={item.text} />
          ) : null
        )}
      </div>
    </div>
  );
};

export default RoomFacilities;
