import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { ToastContainer } from "react-toastify";

import "./globals.css";
import "react-toastify/dist/ReactToastify.css";

import { Footer, Header } from "@/components";
import { FOOTER_CONTENT } from "@/lib/pageContent/FooterContent";
import { HEADER_CONTENT } from "@/lib/pageContent/HeaderContent";
import Favicon from "@/components/Favicon";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Inn Bodrum",
  description: "Hotel Reservation App for reserving hotel rooms",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <Favicon />
      </head>
      <body className={montserrat.className}>
        <Header
          logo={HEADER_CONTENT.logo}
          navbarItems={HEADER_CONTENT.navbarItems}
        />
        <main className="md:container mx-auto flex min-h-screen flex-col items-center justify-start ">
          {children}
        </main>
        <Footer
          title={FOOTER_CONTENT.title}
          quickLinks={FOOTER_CONTENT.quickLinks}
          contact={FOOTER_CONTENT.contact}
        />
        <ToastContainer />
      </body>
    </html>
  );
}
