import React from 'react'
import NavItem from '../NavItem/NavItem'

import './NavItems.css'

const NavItems = (props) => {
    return(
        <ul className="nav-items">
            <NavItem link="/today" count='2'>جلسات امروز</NavItem>
            <NavItem link="/planned" count="4">برنامه ریزی شده</NavItem>
            <NavItem link="/invited">دعوت شده</NavItem>
            <NavItem link="/invitation">دعوت به جلسه</NavItem>
            <NavItem link="/login">بازیابی کلمه عبور</NavItem>
            <NavItem link="/signup">ثبت نام</NavItem>
            <NavItem link="/signin">لاگین</NavItem>
            {/* <NavItem link="/account">حساب کاربری</NavItem> */}
        </ul>
    )
}

export default NavItems