import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import profilePageReducer from './profilePageReducer'
import messengerPageReducer from './messengerPageReducer'
import sidebarReducer from './sidebarReducer'
import usersPageReducer from './usersPageReducer'
import authReducer from './authReducer'
import appReducer from './appReducer'
import thunkMiddleware from 'redux-thunk'

const rootReducer = combineReducers({
    profilePage: profilePageReducer,
    messengerPage: messengerPageReducer,
    usersPage: usersPageReducer,
    sidebar: sidebarReducer,
    auth: authReducer,
    app: appReducer,
})

type RootReducerType = typeof rootReducer   // (globalState: AppStateType) => AppStateType
export type AppStateType = ReturnType<RootReducerType>



// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose    /* redux-devtools-extension */

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware) /* redux-devtools-extension */
))

// const store = createStore(reducers, applyMiddleware(thunkMiddleware))

// @ts-ignore
window.__store__ = store

export default store