import React from 'react';
import {BrowserRouter} from "react-router-dom";

import s from './App.module.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Content from "./components/Content/Content";


const App = (props) => {
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
                    <Content dialogsData={props.dialogsData} messagesData={props.messagesData}  postsData={props.postsData} />
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
