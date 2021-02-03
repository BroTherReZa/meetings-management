import React from "react"
import Wrapper from "../hoc/Wrapper"
import SideNavbar from "../parts/SideNavbar/SideNavbar"

import "./Layout.css"

const Layout = (props) => {
    return (
        <Wrapper>
            <div className="App">
                <SideNavbar />
                <main className="content">{props.children}</main>
            </div>
        </Wrapper>
    )
}

export default Layout
