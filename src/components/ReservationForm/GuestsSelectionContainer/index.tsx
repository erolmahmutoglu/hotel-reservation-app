import { CustomPopover } from "@/components/UI/CustomUIComponents";
import GuestsSelectionTrigger from "./GuestsSelectionTrigger";
import GuestsSelectionBox from "./GuestsSelectionBox";

const GuestsSelectionContainer = () => {
  return (
    <CustomPopover trigger={<GuestsSelectionTrigger />}>
      <GuestsSelectionBox />
    </CustomPopover>
  );
};

export default GuestsSelectionContainer;
