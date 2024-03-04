"use client";

import { CustomPopover } from "@/components/UI/CustomUIComponents";
import SearchFilterTrigger from "./SearchFilterTrigger";
import SearchFiltersBox from "./SearchFiltersBox";
import { useState } from "react";

const SearchFiltersContainer = () => {
  const [filters, setFilters] = useState({
    minPrice: 0,
    maxPrice: 10000,
    cancelFree: true,
  });

  const handleFiltersChange = (name: string, value: number | boolean) => {
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <CustomPopover trigger={<SearchFilterTrigger filters={filters} />}>
      <SearchFiltersBox
        filters={filters}
        handleFiltersChange={handleFiltersChange}
      />
    </CustomPopover>
  );
};

export default SearchFiltersContainer;
