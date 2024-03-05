"use client";

const ErrorPage = () => {
  return (
    <main className="grid min-h-full min-w-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-green-500">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Sayfa Bulunamadı
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-600">
          Üzgünüz, aradığınız sayfayı bulamadık.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="#"
            className="rounded-md bg-green-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500"
          >
            Anasayfaya Dön
          </a>
          <a href="/iletisim" className="text-sm font-semibold text-gray-900">
            İletişim <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </main>
  );
};

export default ErrorPage;
