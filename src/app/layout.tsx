import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Footer, Header } from "@/components";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hotel Reservation App",
  description: "Hotel Reservation App for reserving hotel rooms",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={montserrat.className}>
        <Header
          logo="/svg/logo.svg"
          navbarItems={[
            { href: "/", label: "Anasayfa" },
            { href: "/hakkimizda", label: "Hakkımızda" },
            { href: "/iletisim", label: "İletişim" },
          ]}
        />
        <main className="md:container mx-auto flex min-h-screen flex-col items-center justify-start ">
          {children}
        </main>
        <Footer
          title={{
            about:
              "Bodrum'un merkezinde bulunan otelimiz, Ege'nin kıyısında huzurlu bir konaklama sunar. Modern odalarımız, sahilimizdeki özel plaj ve spa hizmetleriyle unutulmaz bir tatil vadediyor. Restoranımızda yöresel lezzetleri keşfedin, barımızda serinletici içeceklerin tadını çıkarın. Bodrum'un güzelliklerini keşfetmek için ideal bir konumda.",
            fbLink: "https://facebook.com",
            igLink: "https://instagram.com",
            ytLink: "https://youtube.com",
          }}
          contact={{
            address: "Torba Mahallesi, 48400 Bodrum/Muğla, Türkiye",
            email: "info@inn-bodrum.com",
            phone: "+90 252 367 1234",
          }}
        />
        <ToastContainer />
      </body>
    </html>
  );
}
