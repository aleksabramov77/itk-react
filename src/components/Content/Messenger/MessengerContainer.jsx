// import React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../../redux/messengerPage-reducer";
import Messenger from "./Messenger";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
  return {
    dialogs: state.messengerPage.dialogsData,
    messages: state.messengerPage.messagesData,
    newMessageText: state.messengerPage.newMessageText
  }
};

let mapDispatchToProps = (dispatch) => {
  return {
    addMessage: () => dispatch(addMessageActionCreator()),
    updateNewMessageText: newText => dispatch(updateNewMessageTextActionCreator(newText))
  };
};

const MessengerContainer = connect(mapStateToProps, mapDispatchToProps)(Messenger);

export default MessengerContainer;