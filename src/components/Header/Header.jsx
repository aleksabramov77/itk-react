// import React from "react";
import s from './Header.module.css'
import { NavLink } from 'react-router-dom'

const Header = (props) => {
    return (
        <header className={s.header}>
            <img alt='logo' src="https://templates.iqonic.design/socialv/intro/images/logo-full.png"
                 className={s.headerImg}/>
            <div className={s.loginBlock}>
                {props.isAuth ? props.login:
                    <NavLink to={'/login'}>
                        Login
                    </NavLink>}
            </div>
        </header>
    )
}

export default Header
