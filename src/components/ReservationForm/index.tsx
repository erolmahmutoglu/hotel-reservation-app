"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Form } from "@/components/UI/form";
import { FormDateRangePicker } from "../UI/CustomUIComponents";
import { UserGroupIcon } from "@heroicons/react/24/outline";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/UI/popover";

const formSchema = z.object({});

const ReservationForm = () => {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-end justify-center gap-4 shadow-lg px-8 py-6 md:py-4 bg-white rounded-xl max-w-4xl">
      <FormDateRangePicker />
      <div className="flex gap-4 items-end">
        <Popover>
          <PopoverTrigger asChild>
            <div className="grid grid-cols-1">
              <label
                htmlFor="guests"
                className="w-full flex gap-2 items-center cursor-pointer"
              >
                <UserGroupIcon className="w-6 h-6 text-slate-700" />
                <p className="text-slate-700 text-start text-sm font-bold">
                  Kişiler
                </p>
              </label>
              <input
                type="button"
                className="rounded-xl p-2 w-36 h-12 text-center text-slate-700 font-semibold text-md cursor-pointer bg-slate-100 mt-1
               hover:bg-slate-200 transition-all duration-300 ease-in-out shadow-md
                "
                value="Misafir Ekleyin"
              />
            </div>
          </PopoverTrigger>
          <PopoverContent className="w-80"></PopoverContent>
        </Popover>

        <button className="flex items-center justify-center gap-2 w-36 h-12 bg-green-500 rounded-xl">
          <MagnifyingGlassIcon className="w-6 h-6 text-white font-bold" />
          <span className="text-white text-md font-semibold">Oda Bul</span>
        </button>
      </div>
    </div>
  );
};

export default ReservationForm;
