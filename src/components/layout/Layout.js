import React from "react";
import Wrapper from "../hoc/Wrapper";
import Header from "../parts/Header/Header";
import Footer from "../parts/Footer/Footer";
import SideNavbar from "../parts/SideNavbar/SideNavbar";

import "./Layout.css";

const Layout = (props) => {
  return (
    <Wrapper>
      <SideNavbar />
      <main className="content">{props.children}</main>
      <Footer />
    </Wrapper>
  );
};

export default Layout;
