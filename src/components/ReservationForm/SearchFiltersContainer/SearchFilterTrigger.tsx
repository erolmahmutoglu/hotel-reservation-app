import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";

interface SearchFilterTriggerProps {
  filters: {
    minPrice: number;
    maxPrice: number;
    cancelFree: boolean;
  };
}

const SearchFilterTrigger = ({ filters }: SearchFilterTriggerProps) => {
  return (
    <div className="group w-full flex gap-2 justify-center items-center cursor-pointer border-yellow-400 border-2 rounded-lg hover:bg-yellow-400">
      <AdjustmentsHorizontalIcon className="w-6 h-6 text-slate-800 group-hover:text-white" />
      <p className="text-slate-700 group-hover:text-white text-start text-md font-semibold leading-6 text-nowrap tracking-wider">
        Filtreler
      </p>
      <input
        className="sr-only"
        type="number"
        name="minPrice"
        value={filters.minPrice}
        onChange={() => {}}
      />
      <input
        className="sr-only"
        type="number"
        name="maxPrice"
        value={filters.maxPrice}
        onChange={() => {}}
      />
      <input
        className="sr-only"
        type="checkbox"
        name="cancelFree"
        checked={filters.cancelFree}
        onChange={() => {}}
      />
    </div>
  );
};

export default SearchFilterTrigger;
