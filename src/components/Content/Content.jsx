import React from "react";
import {Route} from "react-router-dom";

import s from "./Content.module.css";
import Profile from "./Profile/Profile";
import Messenger from "./Messenger/Messenger";
import News from "./News/News";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";

const Content = () => {
    return (
        <div className={s.appWrapperContent}>
            <div className={s.contentHeadImage}>
            </div>
            <div className={s.dynamicContent}>
                <Route path='/profile' component={Profile}/>
                <Route path='/messenger' component={Messenger}/>
                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>
                <Route path='/settings' component={Settings}/>
            </div>
        </div>
    );
};

export default Content;
