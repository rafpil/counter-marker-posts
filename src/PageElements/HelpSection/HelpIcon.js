import React from "react";
import { FaInfo } from "react-icons/fa";

import "./HelpIcon.css";

const HelpIcon = () => {
  return (
    <div className="help-icon">
      <abbr title="Instrukcja obsługi"> 
        <FaInfo className="help-icon--info" />
      </abbr>
    </div>
  );
};

export default HelpIcon;
