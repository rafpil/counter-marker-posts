import React from "react";

import "./Copyright.css";

const Copyright = () => {
  return (
    <div className="copyright">
      <div className="sm:mr-auto whitespace-nowrap">
        [&nbsp;Designed & Built by&nbsp;
        <a
          href="https://github.com/rafpil"
          rel="noreferrer"
          target="_blank"
          className="copyright-anchor"
        >
          Rafał Pilśniak
        </a>
        &nbsp;]
      </div>
      <div className="sm:ml-auto whitespace-nowrap">[&nbsp;Copyright &copy; 2022&nbsp;]</div>
    </div>
  );
};

export default Copyright;
