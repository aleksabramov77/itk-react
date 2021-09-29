import {combineReducers, createStore} from "redux";
import profilePageReducer from "./profilePage-reducer";
import messengerPageReducer from "./messengerPage-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersPageReducer from './usersPage-reducer'
import authReducer from './auth-reducer'

let reducers = combineReducers({
  profilePage: profilePageReducer,
  messengerPage: messengerPageReducer,
  usersPage: usersPageReducer,
  sidebar: sidebarReducer,
  auth: authReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;