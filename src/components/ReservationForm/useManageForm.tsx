import { useEffect, useState } from "react";
import * as fn from "date-fns";

import { z } from "zod";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
const schema = z
  .object({
    startDate: z.date().min(fn.addDays(new Date(), -1), {
      message: "Giriş tarihi bugünden önce olamaz.",
    }),
    endDate: z.date().min(new Date(), {
      message: "Çıkış tarihi bugünden sonra olmalıdır.",
    }),
    adults: z
      .number()
      .min(1, {
        message: "En az 1 yetişkin olmalıdır.",
      })
      .max(5, {
        message: "En fazla 5 yetişkin olabilir.",
      }),
    children: z.number().min(0).max(3, {
      message: "En fazla 3 çocuk olabilir.",
    }),
    infants: z.number().min(0).max(2, {
      message: "En fazla 2 bebek olabilir.",
    }),
    minPrice: z.number().min(0).max(10000),
    maxPrice: z.number().min(0).max(10000),
    cancelFree: z.boolean(),
  })
  .refine((data) => data.startDate < data.endDate, {
    message: "Çıkış tarihi giriş tarihinden önce olamaz",
    path: ["endDate"],
  });

type SearchFormValues = {
  startDate: Date;
  endDate: Date;
  adults: number;
  children: number;
  infants: number;
  minPrice: number;
  maxPrice: number;
  cancelFree: boolean;
};

const useManageForm = () => {
  const [formValues, setFormValues] = useState({
    startDate: new Date(),
    endDate: fn.addDays(new Date(), 1),
  });

  const [formErrors, setFormErrors] = useState<any>();

  const [rooms, setRooms] = useState<any>();
  const [isLoading, setIsLoading] = useState(false);

  const getFormValues = (value: any, name: string) => {
    setFormValues({ ...formValues, [name]: value });
  };

  const getSearchFormValues = (
    e: React.FormEvent<HTMLFormElement>
  ): SearchFormValues => {
    const formData = new FormData(e.currentTarget);

    return {
      startDate: formValues.startDate,
      endDate: formValues.endDate,
      adults: parseInt(formData.get("adults") as string) || 1,
      children: parseInt(formData.get("children") as string),
      infants: parseInt(formData.get("infants") as string),
      minPrice: parseInt(formData.get("minPrice") as string) || 0,
      maxPrice: parseInt(formData.get("maxPrice") as string) || 10000,
      cancelFree: formData.get("cancelFree")?.valueOf() ? true : false,
    };
  };

  const getFormErrors = (values: SearchFormValues) => {
    try {
      const parsed = schema.parse(values);

      setFormErrors(undefined);

      return {
        requestData: parsed,
        error: undefined,
      };
    } catch (error: any) {
      if (error instanceof z.ZodError) {
        setFormErrors(error.flatten().fieldErrors);
        return {
          requestData: undefined,
          error: error.flatten().fieldErrors,
        };
      } else {
        setFormErrors({ general: error.message });
        return {
          requestData: undefined,
          error: { general: error.message },
        };
      }
    }
  };

  const fetchRooms = async (requestData: SearchFormValues) => {
    try {
      setIsLoading(true);
      const response = await fetch("/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      const data = await response.json();
      setRooms(data);
      return data;
    } catch (error) {
      toast.error("Bir hata oluştu. Lütfen tekrar deneyin.", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = getSearchFormValues(e);
    const { requestData, error } = getFormErrors(data);

    if (error) {
      const message = Object.values(error)[0][0];

      toast.error(message, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }

    fetchRooms(requestData);
  };

  return { getFormValues, handleSubmit, formErrors, isLoading, rooms };
};

export default useManageForm;
