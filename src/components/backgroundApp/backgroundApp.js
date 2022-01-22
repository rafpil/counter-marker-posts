import React from "react";

const BackgroundApp = (props) => {
  return (
    <div className="bg-[#FBBE00] border-2 border-[#b48802] rounded w-10/12 bg-opacity-60">
      {props.children}
    </div>
  );
};

export default BackgroundApp;
