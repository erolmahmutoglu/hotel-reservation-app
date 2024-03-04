import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/UI/popover";

interface CustomPopoverProps {
  trigger: React.ReactNode;
  children?: React.ReactNode;
}

const CustomPopover = ({ trigger, children }: CustomPopoverProps) => {
  return (
    <Popover>
      <PopoverTrigger>{trigger}</PopoverTrigger>
      <PopoverContent className="w-80">{children}</PopoverContent>
    </Popover>
  );
};

export default CustomPopover;
