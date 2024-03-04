"use client";
import StoreProvider from "@/lib/redux/StoreProvider";
import AvailableRoomsContainer from "./AvailableRoomsContainer";
import SearchFormContainer from "./SearchFormContainer";

const PageContainer = () => {
  return (
    <StoreProvider>
      <section className="w-full flex flex-col place-items-start gap-24">
        <SearchFormContainer />
        <AvailableRoomsContainer />
      </section>
    </StoreProvider>
  );
};

export default PageContainer;
