let ADD_MESSAGE = 'ADD_MESSAGE';
let UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

let initialState = {
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
};


const messengerPageReducer = (state = initialState, action) => {
  // debugger
  let stateCopy

  switch (action.type) {

    case ADD_MESSAGE:
      let newMessage = {
        id: state.messagesData.length + 1, //id counter imitation
        message: state.newMessageText,
      };
      stateCopy = {
        ...state,
        messagesData: [...state.messagesData, newMessage],
        newMessageText: ''
      };
      return stateCopy;

    case UPDATE_NEW_MESSAGE_TEXT:
      stateCopy = {
        ...state,
        newMessageText: action.newMessageText
      };
      console.log(stateCopy.newMessageText);
      return stateCopy;

    default:
      return state;
  }
};

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});

export const updateNewMessageTextActionCreator = newText => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newMessageText: newText
});

export default messengerPageReducer;