import React from "react";
import { FaInfo } from "react-icons/fa";

const HelpIcon = () => {
  return (
    <div className="w-full flex justify-end p-2">
        <FaInfo className="rounded-full text-[2rem] bg-[#142F56] text-white p-[.3rem] shadow-md hover:bg-[#062147] hover:shadow-lg focus:bg-[#062147] focus:shadow-lg" />
    </div>
  );
};

export default HelpIcon;
