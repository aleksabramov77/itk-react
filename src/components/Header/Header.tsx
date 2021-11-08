import React from 'react'
import s from './Header.module.css'
import {NavLink} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux"
import {logOut} from "../../redux/authReducer"
import {AppStateType} from "../../redux/redux-store"


const Header = () => {
  const dispatch = useDispatch()
  const login = useSelector((state: AppStateType) => state.auth.login)
  const isAuth = useSelector((state: AppStateType) => state.auth.isAuth)
  const onLogout = () => dispatch(logOut())

  return (
    <header className={s.header}>
      <img alt='logo' src="https://templates.iqonic.design/socialv/intro/images/logo-full.png"
           className={s.headerImg}/>
      <div className={s.loginBlock}>
        {isAuth
          ? <div> {login + ' '}
            <button type="button" onClick={onLogout}> LogOut</button>
          </div>
          : <NavLink to={'/login'}>
            Login
          </NavLink>}
      </div>
    </header>
  )
}

export default Header
