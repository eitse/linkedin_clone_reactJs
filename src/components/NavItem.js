import React from "react";
import "./Header.css";

function NavItem(props) {
  return (
    <div className="nav--item p-2 md:text-center md:text-sm">
      <a href="/">
        <div className="nav--icon">
          <props.icon />
        </div>
        <span className="nav--text hidden md:inline-flex">
          {props.navTitle}
        </span>
      </a>
    </div>
  );
}

export default NavItem;
