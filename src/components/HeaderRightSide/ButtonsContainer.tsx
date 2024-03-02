import { Sidebar } from "..";
import { CustomButton } from "../UI";
import { CustomSheet } from "../UI/CustomUIComponents";

import HamburgerMenu from "./HamburgerMenu";

const ButtonsContainer = () => {
  return (
    <div className="flex items-center justify-end space-x-1">
      <CustomButton label="Rezervasyon" variant="primary" link="/rezervasyon" />
      <CustomSheet side="right" trigger={<HamburgerMenu />}>
        <Sidebar title="Menü" />
      </CustomSheet>
    </div>
  );
};

export default ButtonsContainer;
