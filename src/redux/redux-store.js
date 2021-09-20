import {combineReducers, createStore} from "redux";
import profilePageReducer from "./profilePage-reducer";
import messengerPageReducer from "./messengerPage-reducer";
import sidebarReducer from "./sidebar-reducer";

let reducers = combineReducers({
  profilePage: profilePageReducer,
  messengerPage: messengerPageReducer,
  sidebar: sidebarReducer
});

let store = createStore(reducers);

export default store;