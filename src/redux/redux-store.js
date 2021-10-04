import { applyMiddleware, combineReducers, createStore } from 'redux'
import profilePageReducer from "./profilePageReducer";
import messengerPageReducer from "./messengerPageReducer";
import sidebarReducer from "./sidebarReducer";
import usersPageReducer from './usersPageReducer'
import authReducer from './authReducer'
import thunkMiddleware from 'redux-thunk'

let reducers = combineReducers({
  profilePage: profilePageReducer,
  messengerPage: messengerPageReducer,
  usersPage: usersPageReducer,
  sidebar: sidebarReducer,
  auth: authReducer,

});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;