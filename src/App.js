import React from 'react'
import s from './App.module.css';
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Content from "./components/Content/Content";
import HeaderContainer from './components/Header/HeaderContainer'
// import Login from './components/Content/Login/Login'




const App = () => {
  return (
    <BrowserRouter>
      <div className={s.appWrapper}>
          {/*<Login/>*/}
        <div className={s.block + ' ' + s.header}><HeaderContainer /></div>
        <div className={s.block + ' ' + s.navbar}><Navbar /></div>
        <div className={s.block + ' ' + s.content}><Content /></div>
      </div>
    </BrowserRouter>
  );
};

export default App;


