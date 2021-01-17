import React from "react";
import Search from '../Search/Search'
import NavItems from "./NavItems/NavItems";

import "./SideNavbar.css";

const SideNavbar = () => {
  return (
    <header className="side-navbar">
      <Search />
      <nav>
        <NavItems />
      </nav>
    </header>
  );
};

export default SideNavbar;
