import React from 'react';
import s from './App.module.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Content/Profile/Profile';
import Messages from "./components/Content/Messages/Messages";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/Content/News/News";
import Music from "./components/Content/Music/Music";
import Settings from "./components/Content/Settings/Settings";


const App = () => {
    return (
        <BrowserRouter>
            <div className={s.appWrapper}>
                <Header/>
                <Navbar/>
                <div className={s.appWrapperContent}>
                    <div className={s.contentHeadImage}>
                    </div>
                    <div className={s.dynamicContent}>
                        <Route path='/profile' component={Profile}/>
                        <Route path='/messages' component={Messages}/>
                        <Route path='/news' component={News}/>
                        <Route path='/music' component={Music}/>
                        <Route path='/settings' component={Settings}/>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
