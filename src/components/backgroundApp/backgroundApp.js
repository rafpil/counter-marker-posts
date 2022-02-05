import React from "react";
import "./backgroundApp.css";

const BackgroundApp = (props) => {
  return <div className="background-app">{props.children}</div>;
};

export default BackgroundApp;