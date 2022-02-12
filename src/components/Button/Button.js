import React from "react";

import "./Button.css";

const Button = ({ click, disabled }) => {

  return (
    <button
      type="button"
      disabled={!disabled}
      className="button"
      onClick={click}
    >
      Przelicz i dodaj  
    </button>
  );
};

export default Button;
