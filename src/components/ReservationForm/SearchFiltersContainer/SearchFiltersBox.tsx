import { CustomButton } from "@/components/UI/CustomUIComponents";
import CustomRangeSlider from "@/components/UI/CustomUIComponents/CustomRangeSlider";
import { Input } from "@/components/UI/input";
import { useState } from "react";
import { Separator } from "@/components/UI/separator";
import { Checkbox } from "@/components/UI/checkbox";

const SearchFiltersBox = () => {
  const [value, setValue] = useState([10, 10000]);

  return (
    <div className="w-full h-30 grid grid-cols-1 py-3 gap-4">
      <div className="flex flex-col gap-1">
        <p className="text-lg text-slate-900 font-medium">Fiyat Aralığı</p>
        <p className="text-sm text-slate-500">Gecelik fiyat aralığını seçin</p>
      </div>
      <div className="w-full h-30 grid grid-cols-1 py-3 gap-4">
        <CustomRangeSlider
          min={10}
          max={10000}
          step={1}
          defaultValue={[10, 10000]}
          value={value}
          onChange={(value) => setValue(value as [number, number])}
        />
      </div>
      <div className="flex justify-between">
        <div className="flex gap-1 items-center">
          <Input
            id="minPrice"
            name="minPrice"
            type="number"
            min={0}
            max={10000}
            className="w-24 h-8 text-center rounded-md focus:ring-2 focus:ring-yellow-400 focus:outline-none"
            value={value[0]}
            onChange={(e) => {
              setValue((prevValue) => [parseInt(e.target.value), prevValue[1]]);
            }}
          />
          <label
            htmlFor="minPrice"
            className="text-sm font-medium text-slate-600"
          >
            TL
          </label>
        </div>
        <p className="text-slate-600">-</p>
        <div className="flex gap-1 items-center">
          <Input
            id="maxPrice"
            name="maxPrice"
            type="number"
            min={0}
            max={10000}
            className="w-18 h-8 text-center rounded-md focus:ring-2 focus:ring-yellow-400 focus:outline-none"
            value={value[1]}
            onChange={(e) => {
              setValue((prevValue) => [prevValue[0], parseInt(e.target.value)]);
            }}
          />
          <label
            htmlFor="maxPrice"
            className="text-sm font-medium text-slate-600"
          >
            TL
          </label>
        </div>
      </div>
      <Separator />
      <CustomButton label="Filtrele" variant="secondary" />
      <div className="flex flex-col gap-4">
        <div className="flex items-center space-x-2">
          <Checkbox id="cancelFree" name="cancelFree" defaultChecked />
          <label htmlFor="cancelFree" className="text-sm font-medium ">
            Ücretsiz İptal
          </label>
        </div>
      </div>
    </div>
  );
};

export default SearchFiltersBox;
