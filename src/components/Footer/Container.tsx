interface ContainerProps {
  title: string;
  children: React.ReactNode;
}

const Container = ({ title, children }: ContainerProps) => {
  return (
    <div className="flex flex-1 flex-col items-start justify-start gap-6 w-full">
      <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
      {children}
    </div>
  );
};

export default Container;
