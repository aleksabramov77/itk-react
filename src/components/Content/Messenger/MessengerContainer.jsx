import React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../../redux/messengerPage-reducer";
import Messenger from "./Messenger";
import StoreContext from "../../../StoreContext";


const MessengerContainer = () => {
  return (
    <StoreContext.Consumer>
      {
        (store) => {
          let state = store.getState();

          let addMessage = () => {
            store.dispatch(addMessageActionCreator())
          };

          let updateNewMessageText = (newText) => {
            store.dispatch(updateNewMessageTextActionCreator(newText));
          }

          return (
            <Messenger
              dialogs={state.messengerPage.dialogsData}
              messages={state.messengerPage.messagesData}
              newMessageText={state.messengerPage.newMessageText}
              addMessage={addMessage}
              updateNewMessageText={updateNewMessageText}
            />)
        }
      }
    </StoreContext.Consumer>
  );
};

export default MessengerContainer;