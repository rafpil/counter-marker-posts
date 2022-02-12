import React from "react";

import "./Copyright.css";

const Copyright = () => {
  return (
    <div className="copyright">
      <span className="mr-auto">
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
      </span>
      <span className="ml-auto">[&nbsp;Copyright &copy; 2022&nbsp;]</span>
    </div>
  );
};

export default Copyright;
