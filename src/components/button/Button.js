import React from "react";
import "./Button.scss";

export default function Button({ text, className, href, newTab, onClick, iconClass }) {
  return (
    <div className={className}>
      <a className="main-button" href={href} target={newTab && "_blank"} onClick={onClick}>
        {iconClass && <i className={iconClass}></i>} {text}
      </a>
    </div>
  );
}
