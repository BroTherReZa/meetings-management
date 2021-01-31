import React from "react";
import Wrapper from "../hoc/Wrapper";
import SideNavbar from "../parts/SideNavbar/SideNavbar";

import "./Layout.css";

const Layout = (props) => {
  return (
    <Wrapper>
      <SideNavbar />
      <main className="content">{props.children}</main>
    </Wrapper>
  );
};

export default Layout;
