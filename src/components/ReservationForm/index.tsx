"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import * as fn from "date-fns";

import { FormDateRangePicker, CustomButton } from "../UI/CustomUIComponents";
import { Form } from "@/components/UI/form";

import SearchFiltersContainer from "./SearchFiltersContainer";
import GuestsSelectionContainer from "./GuestsSelectionContainer";

const formSchema = z
  .object({
    checkIn: z
      .date()
      .min(fn.addDays(new Date(), -1), {
        message: "Check-in date cannot be in the past",
      }),
    checkOut: z.date().min(new Date(), {
      message: "Check-out date cannot be before tomorrow",
    }),
    adults: z.number(),
    children: z.number(),
    infants: z.number(),
    minPrice: z.number(),
    maxPrice: z.number(),
    cancelFree: z.boolean(),
  })
  .refine(
    (data) => {
      return data.checkIn < data.checkOut;
    },
    { message: "Check-out date must be after check-in date" }
  );

const ReservationForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      checkIn: new Date(),
      checkOut: fn.addDays(new Date(), 1),
      adults: 1,
      children: 0,
      infants: 0,
      minPrice: 0,
      maxPrice: 10000,
      cancelFree: true,
    },
  });

  //display form errors
  console.log("errors", form.formState.errors);

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    const payload = {
      dateRange: {
        checkIn: data.checkIn,
        checkOut: data.checkOut,
      },
      guests: {
        adults: data.adults,
        children: data.children,
        infants: data.infants,
      },
      additionalFilters: {
        minPrice: data.minPrice,
        maxPrice: data.maxPrice,
        cancelFree: data.cancelFree,
      },
    };

    console.log(payload);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className=" flex flex-col md:flex-row items-start md:items-end justify-center gap-8 md:gap-4 shadow-lg px-8 py-6 md:py-4 bg-white rounded-xl max-w-4xl">
          <FormDateRangePicker />
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
    </Form>
  );
};

export default ReservationForm;
