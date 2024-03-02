import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface CustomSheetProps {
  title?: string;
  description?: string;
  trigger: React.ReactNode;
  side?: "top" | "right" | "bottom" | "left";
  children: React.ReactNode;
}

const CustomSheet = ({
  title,
  description,
  trigger,
  side = "left",
  children,
}: CustomSheetProps) => {
  return (
    <Sheet>
      <SheetTrigger>{trigger}</SheetTrigger>
      <SheetContent className="w-[370px]" side={side}>
        <SheetHeader>
          {title && (
            <SheetTitle className="text-2xl font-bold text-slate-800 text-center pb-4">
              {title}
            </SheetTitle>
          )}
          {description && <SheetDescription>{description}</SheetDescription>}
        </SheetHeader>
        <div className="relative w-full h-full flex flex-col place-items-center pb-12">
          {children}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CustomSheet;
