import React, { useContext } from 'react'
import NavItem from '../NavItem/NavItem'
import { AuthContext } from '../../../context/auth-context'
import './NavItems.css'

const NavItems = (props) => {
    const auth = useContext(AuthContext)

    return(
        <ul className="nav-items">
            {auth.isLoggedIn && (<NavItem link="/today" count='2'>جلسات امروز</NavItem>)}
            {auth.isLoggedIn && (<NavItem link="/planned" count="4">برنامه ریزی شده</NavItem>)}
            {auth.isLoggedIn && (<NavItem link="/invited">دعوت شده</NavItem>)}
            {auth.isLoggedIn && (<NavItem link="/invitation">دعوت به جلسه</NavItem>)}
         
            <NavItem link="/login">بازیابی کلمه عبور</NavItem>
            <NavItem link="/signup">ثبت نام</NavItem>
            <NavItem link="/signin">لاگین</NavItem>
            {/* <NavItem link="/account">حساب کاربری</NavItem> */}
        </ul>
    )
}

export default NavItems