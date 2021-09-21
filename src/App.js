import React from 'react';
import s from './App.module.css';
import {BrowserRouter} from 'react-router-dom';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Content from "./components/Content/Content";


const App = (props) => {
  // debugger
  return (
    <BrowserRouter>
      <div className={s.appWrapper}>
        <div className={s.block + ' ' + s.header}>
          <Header/>
        </div>
        <div className={s.block + ' ' + s.navbar}>
          <Navbar/>
        </div>
        <div className={s.block + ' ' + s.content}>
          <Content
            store={props.store}
          />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
