"use client";

import "react-datepicker/dist/react-datepicker.css";

import { useState } from "react";

import DatePicker from "react-datepicker";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import * as fn from "date-fns";
import { tr } from "date-fns/locale/tr";
import { CalendarDaysIcon } from "@heroicons/react/24/outline";

registerLocale("tr", tr);
setDefaultLocale("tr");

interface DatePickerLabelProps {
  htmlFor: string;
  label: string;
}

const DatePickerLabel = ({ htmlFor, label }: DatePickerLabelProps) => {
  return (
    <label
      htmlFor={htmlFor}
      className="w-full flex gap-2 items-center cursor-pointer"
    >
      <CalendarDaysIcon className="w-6 h-6 text-slate-700" />
      <p className="text-slate-700 text-start text-sm font-bold">{label}</p>
    </label>
  );
};
interface FormDateRangePickerProps {
  getFormValues: (value: any, name: string) => void;
}

const FormDateRangePicker = ({ getFormValues }: FormDateRangePickerProps) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date(fn.addDays(new Date(), 1)));

  const datePickerClasses =
    "rounded-xl p-2 w-36 h-12 text-center text-slate-700 font-semibold text-md cursor-pointer bg-slate-100 mt-1  hover:bg-slate-200 transition-all duration-300 ease-in-out shadow-md select-none";

  return (
    <div className="flex gap-4">
      <div className="grid grid-cols-1">
        <DatePickerLabel htmlFor="check-in" label="Giriş" />
        <DatePicker
          id="check-in"
          name="checkIn"
          className={datePickerClasses}
          selected={startDate}
          onChange={(date: Date) => {
            setStartDate(date);
            getFormValues(date, "startDate");
          }}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          dateFormat={"dd MMMM"}
          monthsShown={2}
        />
      </div>
      <div className="grid grid-cols-1">
        <DatePickerLabel htmlFor="check-out" label="Çıkış" />
        <DatePicker
          id="check-out"
          name="checkOut"
          className={datePickerClasses}
          selected={endDate}
          onChange={(date: Date) => {
            setEndDate(date);
            getFormValues(date, "endDate");
          }}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          dateFormat={"dd MMMM"}
          monthsShown={2}
          // calendarContainer={({ children }: { children: React.ReactNode }) => (
          //   <div className="p-4 border-4 bg-slate-50 md:h-72 h-[500px]  w-[280px] md:w-[560px]">
          //     <div className="relative">{children}</div>
          //   </div>
          // )}
        />
      </div>
    </div>
  );
};

export default FormDateRangePicker;
