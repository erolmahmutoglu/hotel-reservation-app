import { MainTitle, SectionHeader } from "..";
import Contact from "../Footer/Contact";
import ContactForm from "./ContactForm";

const PageContainer = () => {
  return (
    <section className="w-full screen flex flex-col gap-8 mb-24">
      <MainTitle title="Inn Bodrum" />
      <div className="w-full h-full flex flex-col md:flex-row items-center md:items-start justify-center gap-8 px-2">
        <div className="flex flex-col gap-8 w-full h-full md:w-1/2 items-start justify-start py-[72px] px-4 rounded-xl bg-white">
          <SectionHeader
            pretitle="İletişim"
            title="Bize Ulaşın"
            subtitle="Sana yardım etmek için burdayız. Herhangi bir sorunuz varsa veya yardıma ihtiyacınız varsa lütfen bizimle iletişime geçin."
          />
          <div className="px-8 md:px-4">
            <Contact
              address="Bodrum, Muğla, Türkiye"
              email="info@inn-bodrum.com"
              phone="+90 555 555 55 55"
            />
          </div>
        </div>

        <div className="w-full h-full md:w-1/2 flex flex-col items-center justify-center gap-4  bg-contact-form bg-cover bg-center bg-opacity-80 py-20 px-4 rounded-xl bg-slate-500 ">
          <h2 className="text-3xl font-bold text-slate-900 p-4">
            İletişim Formu
          </h2>

          <div className="w-full h-full flex max-w-[350px] mx-4 bg-slate-50 rounded-2xl">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageContainer;
