import { UserGroupIcon } from "@heroicons/react/24/outline";

const GuestsSelectionTrigger = () => {
  return (
    <div className="grid grid-cols-1">
      <label
        htmlFor="guests"
        className="w-full flex gap-2 items-center cursor-pointer"
      >
        <UserGroupIcon className="w-6 h-6 text-slate-700" />
        <p className="text-slate-700 text-start text-sm font-bold">Kişiler</p>
      </label>
      <input
        type="button"
        className="rounded-xl p-2 w-36 h-12 text-center text-slate-700 font-semibold text-md cursor-pointer bg-slate-100 mt-1
 hover:bg-slate-200 transition-all duration-300 ease-in-out shadow-md
  "
        value="Misafir Ekleyin"
      />
    </div>
  );
};

export default GuestsSelectionTrigger;
