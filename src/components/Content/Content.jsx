import React from "react";
import {Route} from "react-router-dom";
import s from "./Content.module.css";
import Profile from "./Profile/Profile";
import News from "./News/News";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";
import MessengerContainer from "./Messenger/MessengerContainer";

const Content = () => {
  // debugger
  return (
    <div className={s.appWrapperContent}>
      <div className={s.contentHeadImage}></div>
      <div className={s.dynamicContent}>
        <Route
          path="/profile"
          render={() => (
            <Profile />
          )}
        />
        <Route
          path="/messenger"
          render={() => (
            <MessengerContainer />
          )}
        />
        <Route path="/news" render={() => <News/>}/>
        <Route path="/music" render={() => <Music/>}/>
        <Route path="/settings" render={() => <Settings/>}/>
      </div>
    </div>
  );
};

export default Content;
