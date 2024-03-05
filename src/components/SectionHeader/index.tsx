interface SectionHeaderProps {
  pretitle?: string;
  title: string;
  subtitle?: string;
  orientation?: "start" | "center" | "end";
}

const SectionHeader = ({
  pretitle,
  title,
  subtitle,
  orientation = "start",
}: SectionHeaderProps) => {
  return (
    <header className="flex flex-col lg:flex-row items-center justify-between gap-8 w-full px-8 md:px-4">
      <div className={`flex flex-col gap-4 items-${orientation} mx-auto`}>
        <p className="text-md uppercase font-semibold text-green-500 tracking-widest">
          {pretitle}
        </p>
        <h2 className="text-3xl font-bold text-slate-900 leading-relaxed">
          {title}
        </h2>
        <p className="text-lg font-medium text-slate-500 leading-loose">
          {subtitle}
        </p>
      </div>
    </header>
  );
};

export default SectionHeader;
