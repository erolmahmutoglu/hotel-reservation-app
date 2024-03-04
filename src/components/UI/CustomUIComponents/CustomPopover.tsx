import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/UI/popover";

interface CustomPopoverProps {
  trigger: React.ReactNode;
  children?: React.ReactNode;
  classes?: string;
}

const CustomPopover = ({
  trigger,
  children,
  classes = "w-80",
}: CustomPopoverProps) => {
  return (
    <Popover>
      <PopoverTrigger>{trigger}</PopoverTrigger>
      <PopoverContent className={classes}>{children}</PopoverContent>
    </Popover>
  );
};

export default CustomPopover;
