import React from 'react'
import { NavLink} from 'react-router-dom'

import './NavItem.css'

const NavItem = (props) => {
    return(
        <li className="nav-item">
            <NavLink to={props.link}>
                {props.children}
                <div className="count">
                {props.count}
                </div>
            </NavLink>
        </li>
    )
}

export default NavItem