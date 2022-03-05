import React from "react";

import "./Button.css";

const Button = ({ click, disabled, children }) => {
  return (
    <button
      type="button"
      disabled={!disabled}
      className="button"
      onClick={click}
    >
      {children}
    </button>
  );
};

export default Button;
