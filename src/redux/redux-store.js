import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import profilePageReducer from './profilePageReducer'
import messengerPageReducer from './messengerPageReducer'
import sidebarReducer from './sidebarReducer'
import usersPageReducer from './usersPageReducer'
import authReducer from './authReducer'
import appReducer from './appReducer'
import thunkMiddleware from 'redux-thunk'

let reducers = combineReducers({
    profilePage: profilePageReducer,
    messengerPage: messengerPageReducer,
    usersPage: usersPageReducer,
    sidebar: sidebarReducer,
    auth: authReducer,
    app: appReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose    /* redux-devtools-extension */
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware) /* redux-devtools-extension */
))

// let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.__store__ = store

export default store