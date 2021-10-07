// import React from "react";
import { Route } from 'react-router-dom'
import s from './Content.module.css'
import ProfileContainer from './Profile/ProfileContainer'
import News from './News/News'
import Music from './Music/Music'
import Settings from './Settings/Settings'
import MessengerContainer from './Messenger/MessengerContainer'
import UsersContainer from './Users/UsersContainer'
import Login from './Login/Login'
import LoginContainer from './Login/LoginContainer'

const Content = () => {
    return (
        <div className={s.appWrapperContent}>
            <div className={s.contentHeadImage}/>
            <div className={s.dynamicContent}>
                {/*<Route exact path="/" render={() => <ProfileContainer/>}/>*/}
                {/*<Route exact path="/profile" render={() => <ProfileContainer/>}/>*/}
                <Route exact path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                <Route path="/messenger" render={() => <MessengerContainer/>}/>
                <Route path="/users" render={() => <UsersContainer/>}/>
                <Route path="/news" render={() => <News/>}/>
                <Route path="/music" render={() => <Music/>}/>
                <Route path="/settings" render={() => <Settings/>}/>
                <Route path='/login' render={() => <LoginContainer/>}/>
            </div>
        </div>
    )
}

export default Content
