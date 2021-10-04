import profilePageReducer from "./profilePageReducer";
import messengerPageReducer from "./messengerPageReducer";
import sidebarReducer from "./sidebarReducer";


let store = {
  _state: {
    profilePage: {
      postsData: [
        {id: 1, message: "Hi, how are you", likesCount: 5},
        {id: 2, message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", likesCount: 10},
      ],
      newPostText: null
    },
    messengerPage: {
      dialogsData: [
        {id: 1, name: "Dimych"},
        {id: 2, name: "Sasha"},
        {id: 3, name: "Viktor"},
        {id: 4, name: "Lena"},
        {id: 5, name: "Misha"},
        {id: 6, name: "Egor"},
        {id: 7, name: "Sveta"}
      ],
      messagesData: [
        {id: 1, message: "Hi !!!"},
        {id: 2, message: "How are you ?"},
        {id: 4, message: "Yo"},
        {id: 3, message: "Yo yo"},
        {id: 5, message: "Yo yo yo"}
      ],
      newMessageText: ''
    },
    sidebar: {}
  },
  _callSubscriber() {
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    profilePageReducer(this._state.profilePage, action);
    messengerPageReducer(this._state.messengerPage, action);
    sidebarReducer(this._state.sidebar, action);
    this._callSubscriber(this._state);
  }
};

window.store = store;


export default store;
