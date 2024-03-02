"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Form } from "@/components/UI/form";
import { FormDateRangePicker } from "../UI/CustomUIComponents";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/UI/popover";

const formSchema = z.object({});

const ReservationForm = () => {
  return (
    <div className="flex items-end justify-center gap-4 shadow-lg px-8 py-2 bg-white rounded-[48px]">
      <FormDateRangePicker />
      <Popover>
        <PopoverTrigger asChild>
          <div className="grid grid-cols-1">
            <p className="text-slate-700 text-center text-sm font-bold">
              Kişiler
            </p>
            <span className="flex items-center justify-center rounded-[48px] p-2 w-36 h-12  text-center text-slate-700 font-medium text-md focus:border-2 focus:border-yellow-500 cursor-pointer bg-transparent focus:bg-white mt-1">
              <p>Misafir Ekleyin</p>
            </span>
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-80"></PopoverContent>
      </Popover>

      <button className="group flex items-center justify-center gap-2 hover:w-40 w-14 h-14 bg-green-500 rounded-[48px]">
        <MagnifyingGlassIcon className="w-8 h-8 text-white font-bold" />
        <span
          className="hidden
        group-hover:block
         text-white text-lg font-medium"
        >
          Arama
        </span>
      </button>
    </div>
  );
};

export default ReservationForm;
