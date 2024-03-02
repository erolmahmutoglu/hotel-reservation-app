import { CustomButton } from "../UI";
import HamburgerMenu from "./HamburgerMenu";

const ButtonsContainer = () => {
  return (
    <div className="flex items-center justify-end space-x-1">
      <CustomButton label="Otel Ara" variant="primary" />
      <HamburgerMenu />
    </div>
  );
};

export default ButtonsContainer;
