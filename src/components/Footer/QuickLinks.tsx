import Link from "next/link";

const QuickLinks = () => {
  return (
    <div className="flex flex-1 flex-col items-start justify-start gap-6 w-full">
      <h3 className="text-xl font-semibold text-slate-900">Hızlı Linkler</h3>
      <nav className="flex flex-col items-start justify-start gap-4">
        <Link href="/hakkimizda">
          <span
            className="text-base text-slate-600
           hover:text-green-500"
          >
            Hakkımızda
          </span>
        </Link>
        <Link href="/rezervasyon">
          <span className="text-base text-slate-600 hover:text-green-500">
            Rezervasyon
          </span>
        </Link>

        <Link href="/iletisim">
          <span className="text-base text-slate-600 hover:text-green-500">
            İletişim
          </span>
        </Link>
      </nav>
    </div>
  );
};

export default QuickLinks;
