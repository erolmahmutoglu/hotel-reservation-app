"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Form } from "@/components/UI/form";
import { CustomPopover, FormDateRangePicker } from "../UI/CustomUIComponents";

import GuestsSelectionBox from "./GuestsSelectionContainer/GuestsSelectionBox";
import { CustomButton } from "../UI";
import GuestsSelectionTrigger from "./GuestsSelectionContainer/GuestsSelectionTrigger";

const formSchema = z.object({});

const ReservationForm = () => {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-end justify-center gap-4 shadow-lg px-8 py-6 md:py-4 bg-white rounded-xl max-w-4xl">
      <FormDateRangePicker />
      <div className="flex gap-4 items-end">
        <CustomPopover trigger={<GuestsSelectionTrigger />}>
          <GuestsSelectionBox />
        </CustomPopover>
        <CustomButton
          icon={<MagnifyingGlassIcon className="w-6 h-6 text-white" />}
          label="Oda Bul"
        />
      </div>
    </div>
  );
};

export default ReservationForm;
