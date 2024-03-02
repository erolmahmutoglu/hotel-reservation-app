"use client";

import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { registerLocale, setDefaultLocale } from "react-datepicker";
import { tr } from "date-fns/locale/tr";

registerLocale("tr", tr);
setDefaultLocale("tr");

const FormDateRangePicker = () => {
  const [startDate, setStartDate] = useState(new Date("2014/02/08"));
  const [endDate, setEndDate] = useState(new Date("2014/02/10"));
  return (
    <div className="flex gap-4">
      <div className="grid grid-cols-1">
        <p className="text-slate-700 text-center text-sm font-bold">Giriş</p>
        <DatePicker
          className="rounded-[48px] p-2 w-36 h-12 text-center text-slate-700 font-semibold text-md focus:ring-yellow-500 cursor-pointer bg-transparent focus:bg-slate-50 mt-1"
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
        <p className="text-slate-700 text-center text-sm font-bold">Çıkış</p>
        <DatePicker
          className="rounded-[48px] p-2 w-36 h-12 text-center text-slate-700 font-semibold text-md focus:ring-yellow-500 cursor-pointer bg-transparent focus:bg-slate-50 mt-1"
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
