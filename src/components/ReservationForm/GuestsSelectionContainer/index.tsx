"use client";

import { useState } from "react";

import { CustomPopover } from "@/components/UI/CustomUIComponents";
import GuestsSelectionTrigger from "./GuestsSelectionTrigger";
import GuestsSelectionBox from "./GuestsSelectionBox";

const GuestsSelectionContainer = () => {
  const [guests, setGuests] = useState({
    adults: 1,
    children: 0,
    infants: 0,
  });

  const handleGuestsChange = (name: string, value: number) => {
    setGuests((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <CustomPopover trigger={<GuestsSelectionTrigger guests={guests} />}>
      <GuestsSelectionBox
        guests={guests}
        handleGuestsChange={handleGuestsChange}
      />
    </CustomPopover>
  );
};

export default GuestsSelectionContainer;
