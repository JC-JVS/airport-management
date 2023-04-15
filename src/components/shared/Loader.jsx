import React from "react";
import { ImSpinner8 } from "react-icons/im";

const Loader = ({
  classNameContainer,
  classNameIcon,
}) => {
  return (
    <div className={classNameContainer}>
      <ImSpinner8 className={classNameIcon} />
    </div>
  );
};

export default Loader;