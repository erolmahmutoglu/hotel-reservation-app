import { Sidebar } from "..";
import { CustomButton } from "../ui";
import { CustomSheet } from "../ui/CustomUIComponents";
import HamburgerMenu from "./HamburgerMenu";

const ButtonsContainer = () => {
  return (
    <div className="flex items-center justify-end space-x-1">
      <CustomButton label="Otel Ara" variant="primary" />
      <CustomSheet side="right" trigger={<HamburgerMenu />}>
        <Sidebar title="Menü" />
      </CustomSheet>
    </div>
  );
};

export default ButtonsContainer;
