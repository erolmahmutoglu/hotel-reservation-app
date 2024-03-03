import { Separator } from "@/components/UI/separator";
import GuestsSelectBoxItem from "./GuestsSelectBoxItem";

const GuestsSelectionBox = () => {
  return (
    <div className="w-full h-30 grid grid-cols-1 py-3 gap-4">
      <GuestsSelectBoxItem
        name="adults"
        title="Yetişkin"
        description="13 yaş ve üstü"
        defaultValue={1}
        max={5}
      />
      <Separator />
      <GuestsSelectBoxItem
        name="children"
        title="Çocuk"
        description="2 - 12 yaş arası"
        defaultValue={0}
        max={3}
      />
      <Separator />
      <GuestsSelectBoxItem
        name="infants"
        title="Bebek"
        description="0 - 2 yaş arası"
        defaultValue={0}
        max={2}
      />
    </div>
  );
};

export default GuestsSelectionBox;
