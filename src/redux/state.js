let store = {
  _state: {
    profilePage: {
      postsData: [
        {id: 1, message: "Hi, how are you", likesCount: 5},
        {id: 2, message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", likesCount: 10},
      ],
      newPostText: ''
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
    }
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
    if(action.type === 'ADD-POST') {
      let newPost = {
        id: this._state.profilePage.postsData.length + 1,
        message: this._state.profilePage.newPostText,
        likesCount: this._state.profilePage.postsData.length + 1
      };
      this._state.profilePage.postsData.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    }
    else if(action.type === 'ADD-MESSAGE') {
      let newMessage = {
        id: this._state.messengerPage.messagesData.length + 1,
        message: this._state.messengerPage.newMessageText,
      };
      this._state.messengerPage.messagesData.push(newMessage);
      this._state.messengerPage.newMessageText = '';
      this._callSubscriber(this._state);
    }
    else if(action.type === 'UPDATE-NEW-POST-TEXT') {
      this._state.profilePage.newPostText = action.newPostText;
      console.log(this._state.profilePage.newPostText)
      this._callSubscriber(this._state);
    }
    else if(action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
      this._state.messengerPage.newMessageText = action.newMessageText;
      console.log(this._state.messengerPage.newMessageText)
      this._callSubscriber(this._state);
    }
    }

};

window.store = store;

export default store;