import React from 'react'
import { Switch, Redirect, Route } from 'react-router-dom'
import s from './Content.module.css'
import ProfileContainer from './Profile/ProfileContainer'
import LoginContainer from './Login/LoginContainer'
import Preloader from '../common/Preloader/Preloader'

const MessengerContainer = React.lazy(() => import('./Messenger/MessengerContainer'))
const UsersContainer = React.lazy(() => import('./Users/UsersContainer'))
const News = React.lazy(() => import('./News/News'))
const Music = React.lazy(() => import('./Music/Music'))
const Settings = React.lazy(() => import('./Settings/Settings'))

const Content = () => {
    return (
        <div className={s.appWrapperContent}>
            <div className={s.contentHeadImage}></div>
            <div className={s.dynamicContent}>
                <React.Suspense fallback={<Preloader/>}>
                    <Switch>
                        <Redirect exact from="/" to="/profile"/>
                        <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                        <Route path="/messenger" render={() => <MessengerContainer/>}/>
                        <Route path="/users" render={() => <UsersContainer/>}/>
                        <Route path="/news" render={() => <News/>}/>
                        <Route path="/music" render={() => <Music/>}/>
                        <Route path="/settings" render={() => <Settings/>}/>
                        <Route path='/login' render={() => <LoginContainer/>}/>
                        <Route path="*" render={() => <div> 404 Not Found </div>}/>
                    </Switch>
                </React.Suspense>
            </div>
        </div>
    )
}

export default Content
