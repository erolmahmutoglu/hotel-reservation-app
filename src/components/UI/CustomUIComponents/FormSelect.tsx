import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/UI/select";

import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/UI/form";

interface FormSelectProps {
  name: string;
  placeholder: string;
  options: {
    label: string;
    value: string;
  }[];
  form: any;
  callback?: (value: string) => void;
}

const FormSelect = ({
  name,
  options,
  placeholder,
  form,
  callback = () => {},
}: FormSelectProps) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="w-full max-w-md">
          <Select
            onValueChange={(value) => {
              field.onChange(value);
              callback(value);
            }}
            defaultValue={field.value}
          >
            <FormControl className="bg-white focus:ring-blue-500 h-10 min-w-36">
              <SelectTrigger className="text-slate-800 text-md font-medium">
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {options.map((option) => (
                <SelectItem
                  key={option.value}
                  className="text-slate-700 text-md"
                  value={option.value}
                >
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormSelect;
