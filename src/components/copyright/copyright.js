import React from "react";

const Copyright = () => {
  return (
    <div className="w-full tracking-wider  text-sm font-bold text-[#142F56] flex pt-2 pl-1">
      <span className="mr-auto"> [&nbsp;Designed & Built by&nbsp;
      <a
        href="https://github.com/rafpil"
        target="_blank"
        className="hover:text-[#062147]"
      >
        Rafał Pilśniak
      </a>
      &nbsp;]
      </span>
      <span className="ml-auto">[&nbsp;Copyright &copy; 2022&nbsp;]</span>
    </div>
  );
};

export default Copyright;
