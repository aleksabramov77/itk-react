// import React from "react";
import s from './Header.module.css'
import { NavLink } from 'react-router-dom'
import React from 'react'

const Header = props => {
    // debugger
    return (
        <header className={s.header}>
            <img alt='logo' src="https://templates.iqonic.design/socialv/intro/images/logo-full.png"
                 className={s.headerImg}/>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div> {props.login + ' '}
                        <button type="button" onClick={props.logOut}> LogOut</button>
                    </div>
                    : <NavLink to={'/login'}>
                        Login
                    </NavLink>}
            </div>
        </header>
    )
}

export default Header
