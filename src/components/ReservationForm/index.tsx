"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

import { FormDateRangePicker, CustomButton } from "../UI/CustomUIComponents";

import SearchFiltersContainer from "./SearchFiltersContainer";
import GuestsSelectionContainer from "./GuestsSelectionContainer";
import useManageForm from "./useManageForm";

const ReservationForm = () => {
  const { getFormValues, handleSubmit } = useManageForm();

  return (
    <form onSubmit={handleSubmit}>
      <div className=" flex flex-col md:flex-row items-start md:items-end justify-center gap-8 md:gap-4 shadow-lg px-8 py-6 md:py-4 bg-white rounded-xl max-w-4xl">
        <FormDateRangePicker getFormValues={getFormValues} />
        <div className="flex gap-4 items-end">
          <GuestsSelectionContainer />
          <div className="grid grid-cols-1 gap-1">
            <SearchFiltersContainer />
            <CustomButton
              type="submit"
              icon={<MagnifyingGlassIcon className="w-6 h-6 text-white" />}
              label="Oda Bul"
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default ReservationForm;
