import React from "react";
import css from './Navbar.module.css'
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className={css.nav}>
            <div className={css.item}>
                <NavLink to="/Profile" activeClassName={css.activeLink}>Profile</NavLink>
            </div>
            <div className={css.item}>
                <NavLink to="/Battle" activeClassName={css.activeLink}>Battle</NavLink>
            </div>
            <div className={css.item}>
                <NavLink to="/Dialogs" activeClassName={css.activeLink}>Dialogs</NavLink>
            </div>
            <div className={css.item}>
                <NavLink to="/News" activeClassName={css.activeLink}>News</NavLink>
            </div>
            <div className={css.item}>
                <NavLink to="/Users" activeClassName={css.activeLink}>Users</NavLink>
            </div>
            <div className={css.item}>
                <NavLink to="/Settings" activeClassName={css.activeLink}>Settings</NavLink>
            </div>
        </nav>
    )
};

export default Navbar;