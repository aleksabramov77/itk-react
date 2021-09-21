import React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../../redux/messengerPage-reducer";
import Messenger from "./Messenger";



const MessengerContainer = (props) => {
  let state = props.store.getState();

  let addMessage = () => {
    props.store.dispatch(addMessageActionCreator())
  };

  let updateNewMessageText = (newText) => {
    props.store.dispatch(updateNewMessageTextActionCreator(newText));
  }


  return (
    <Messenger
      dialogs={state.messengerPage.dialogsData}
      messages={state.messengerPage.messagesData}
      newMessageText={state.messengerPage.newMessageText}
      addMessage={addMessage}
      updateNewMessageText={updateNewMessageText}
    />
  );
};

export default MessengerContainer;