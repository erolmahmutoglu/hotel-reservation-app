import { CustomPopover } from "@/components/UI/CustomUIComponents";
import SearchFilterTrigger from "./SearchFilterTrigger";
import SearchFiltersBox from "./SearchFiltersBox";

const SearchFiltersContainer = () => {
  return (
    <CustomPopover trigger={<SearchFilterTrigger />}>
      <SearchFiltersBox />
    </CustomPopover>
  );
};

export default SearchFiltersContainer;
