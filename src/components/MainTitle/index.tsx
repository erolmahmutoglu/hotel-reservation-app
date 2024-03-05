interface MainTitleProps {
  title: string;
  description?: string;
}

const MainTitle = ({ title, description }: MainTitleProps) => {
  return (
    <section className="flex flex-col items-center justify-center gap-4 mt-8">
      <h1 className="text-4xl md:text-6xl text-nowrap font-bold text-center text-green-500">
        {title}
      </h1>
      {description && (
        <div className=" max-w-5xl">
          <p className="text-lg md:text-xl font-medium text-center text-slate-700 tracking-wide leading-loose md:leading-loose">
            {description}
          </p>
        </div>
      )}
    </section>
  );
};

export default MainTitle;
