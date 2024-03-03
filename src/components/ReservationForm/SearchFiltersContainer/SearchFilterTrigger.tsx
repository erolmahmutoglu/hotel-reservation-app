import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";

const SearchFilterTrigger = () => {
  return (
    <div className="group w-full flex gap-2 justify-center items-center cursor-pointer border-yellow-400 border-2 rounded-lg hover:bg-yellow-400">
      <AdjustmentsHorizontalIcon className="w-6 h-6 text-slate-800 group-hover:text-white" />
      <p className="text-slate-700 group-hover:text-white text-start text-md font-semibold leading-6 text-nowrap tracking-wider">
        Filtrele
      </p>
    </div>
  );
};

export default SearchFilterTrigger;
