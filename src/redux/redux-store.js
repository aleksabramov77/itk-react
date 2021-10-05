import { applyMiddleware, combineReducers, createStore } from 'redux'
import profilePageReducer from "./profilePageReducer";
import messengerPageReducer from "./messengerPageReducer";
import sidebarReducer from "./sidebarReducer";
import usersPageReducer from './usersPageReducer'
import authReducer from './authReducer'
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'


let reducers = combineReducers({
  profilePage: profilePageReducer,
  messengerPage: messengerPageReducer,
  usersPage: usersPageReducer,
  sidebar: sidebarReducer,
  auth: authReducer,
  form: formReducer,

});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;