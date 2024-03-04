import AvailableRoomsContainer from "./AvailableRoomsContainer";
import SearchFormContainer from "./SearchFormContainer";

const PageContainer = () => {
  return (
    <section className="w-full flex flex-col place-items-start gap-24">
      <SearchFormContainer />
      <AvailableRoomsContainer />
    </section>
  );
};

export default PageContainer;
