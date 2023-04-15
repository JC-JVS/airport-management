import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const BreadCrumb = () => {
  return (
    <div className="flex items-center gap-2">
      <span>APPLICATION MANAGEMENT</span>
      <span>
        <MdKeyboardArrowRight />
      </span>
      <span>FILTER APPLICATION LETTER</span>
      <span>
        <MdKeyboardArrowRight />
      </span>
      <span>APPLICATION INFORMATION</span>
    </div>
  );
};

export default BreadCrumb;
