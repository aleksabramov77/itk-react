let ADD_MESSAGE = 'ADD_MESSAGE';

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
};


const messengerPageReducer = (state = initialState, action) => {
   switch (action.type) {

     case ADD_MESSAGE:
       let newMessage = {
         id: state.messagesData.length + 1, //id counter imitation
         message: action.newMessageText,
       };
       return {
         ...state,
         messagesData: [...state.messagesData, newMessage],
       };

    default:
      return state;
  }
};

export const addMessage = newMessageText => ({type: ADD_MESSAGE, newMessageText});

export default messengerPageReducer;