/* Actions types */

const ADD_MESSAGE = 'messengerPage/ADD_MESSAGE';


/* Initial state */

type InitialState = {
  dialogsData: Array<{ id: number, name: string }>
  messagesData: Array<{ id: number, message: string }>
}
const initialState: InitialState = {
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


/* Reducer */

const messengerPageReducer = (state = initialState, action: any): InitialState => {
  switch (action.type) {

    case ADD_MESSAGE:
      return {
        ...state,
        messagesData: [...state.messagesData, {
          id: state.messagesData.length + 1, //id counter imitation
          message: action.newMessageText,
        }],
      };

    default:
      return state;
  }
};


/* Action Creators */

type AddMessageACType = (newMessageText: string) => {
  type: typeof ADD_MESSAGE
  newMessageText: string
}
export const addMessage: AddMessageACType = (newMessageText) => ({type: ADD_MESSAGE, newMessageText});


/* Default export */

export default messengerPageReducer