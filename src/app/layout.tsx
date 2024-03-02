import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "@/components";

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
        <main className="md:container mx-auto flex min-h-screen flex-col items-center justify-start">
          {children}
        </main>
      </body>
    </html>
  );
}
