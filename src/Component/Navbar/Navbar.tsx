import React from 'react';
import s from '../Navbar/Navbar.module.css' ;
import {NavLink} from "react-router-dom";





const Navbar = () => {
    return (
        <nav className={s.Nav}>
            <div className={s.item}>
                <NavLink to='/Profile' activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to='/Dialogs' activeClassName={s.activeLink}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <a>News</a>
            </div>
            <div className={s.item}>
                <a>Music</a>
            </div>
            <div className={s.item}>
                <a>Settings</a>
            </div>

        </nav>
    )
}


export default Navbar;


