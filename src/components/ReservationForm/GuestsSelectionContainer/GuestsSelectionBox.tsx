import { Separator } from "@/components/UI/separator";
import GuestsSelectBoxItem from "./GuestsSelectBoxItem";

interface GuestsSelectionBoxProps {
  guests: {
    adults: number;
    children: number;
    infants: number;
  };
  handleGuestsChange: (name: string, value: number) => void;
}

const GuestsSelectionBox = ({
  guests,
  handleGuestsChange,
}: GuestsSelectionBoxProps) => {
  return (
    <div className="w-full h-30 grid grid-cols-1 py-3 gap-4">
      <GuestsSelectBoxItem
        name="adults"
        title="Yetişkin"
        description="13 yaş ve üstü"
        max={5}
        min={1}
        guests={guests}
        handleChange={handleGuestsChange}
      />
      <Separator />
      <GuestsSelectBoxItem
        name="children"
        title="Çocuk"
        description="2 - 12 yaş arası"
        max={3}
        min={0}
        guests={guests}
        handleChange={handleGuestsChange}
      />
      <Separator />
      <GuestsSelectBoxItem
        name="infants"
        title="Bebek"
        description="0 - 2 yaş arası"
        max={2}
        min={0}
        guests={guests}
        handleChange={handleGuestsChange}
      />
    </div>
  );
};

export default GuestsSelectionBox;
