"use client";

import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { registerLocale, setDefaultLocale } from "react-datepicker";
import { tr } from "date-fns/locale/tr";

import { CalendarDaysIcon } from "@heroicons/react/24/outline";

registerLocale("tr", tr);
setDefaultLocale("tr");

const FormDateRangePicker = () => {
  const [startDate, setStartDate] = useState(new Date("2014/02/08"));
  const [endDate, setEndDate] = useState(new Date("2014/02/10"));
  return (
    <div className="flex gap-4">
      <div className="grid grid-cols-1">
        <label
          htmlFor="check-in"
          className="w-full flex gap-2 items-center cursor-pointer"
        >
          <CalendarDaysIcon className="w-6 h-6 text-slate-700" />
          <p className="text-slate-700 text-start text-sm font-bold">Giriş</p>
        </label>
        <DatePicker
          id="check-in"
          className="rounded-xl p-2 w-36 h-12 text-center text-slate-700 font-semibold text-md cursor-pointer bg-slate-100 mt-1  hover:bg-slate-200 transition-all duration-300 ease-in-out shadow-md"
          selected={startDate}
          onChange={(date: Date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          dateFormat={"dd MMMM"}
          monthsShown={2}
        />
      </div>
      <div className="grid grid-cols-1">
        <label
          htmlFor="check-out"
          className="w-full flex gap-2 items-center cursor-pointer"
        >
          <CalendarDaysIcon className="w-6 h-6 text-slate-700" />
          <p className="text-slate-700 text-start text-sm font-bold">Çıkış</p>
        </label>
        <DatePicker
          id="check-out"
          className="rounded-xl p-2 w-36 h-12 text-center text-slate-700 font-semibold text-md cursor-pointer bg-slate-100 mt-1  hover:bg-slate-200 transition-all duration-300 ease-in-out shadow-md"
          selected={endDate}
          onChange={(date: Date) => setEndDate(date as Date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          dateFormat={"dd MMMM"}
          monthsShown={2}
        />
      </div>
    </div>
  );
};

export default FormDateRangePicker;
