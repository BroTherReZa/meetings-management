import React from "react";
import NavItems from "./NavItems/NavItems";

import "./SideNavbar.css";

const SideNavbar = () => {
  return (
    <header className="side-navbar">
      <nav>
        <NavItems />
      </nav>
    </header>
  );
};

export default SideNavbar;
