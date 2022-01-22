import React, { useContext } from "react";
import DataContext from "../../context/dataCtx";

const Button = ({ click }) => {
  const dataCtx = useContext(DataContext);
  return (
    <button
      type="button"
      className="inline-block px-7 py-3 bg-[#142F56] text-white font-bold text-sm leading-snug uppercase rounded shadow-md hover:bg-[#062147] hover:shadow-lg focus:bg-[#062147] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#062147] active:shadow-lg transition duration-150 ease-in-out w-full"
      onClick={() => dataCtx.add(click())}
    >
      Przelicz i dodaj  
    </button>
  );
};

export default Button;
