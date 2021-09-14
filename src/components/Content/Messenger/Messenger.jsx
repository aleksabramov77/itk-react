import React from "react";
import s from "./Messenger.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../../redux/messengerPage-reducer";



const Messenger = (props) => {
  let dialogsElements = props.state.dialogsData.map((d) => (
    <DialogItem id={d.id} name={d.name} />
  ));

  let messagesElements = props.state.messagesData.map((m) => (
    <Message message={m.message} />
  ));


  let addMessage = () => {
    props.dispatch(addMessageActionCreator())
  };

  let updateNewMessageText = (e) => {
    let newText = e.target.value;
    props.dispatch(updateNewMessageTextActionCreator(newText));
  }


  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messagesItems}>{messagesElements}</div>
      <div className={s.newMessage}>
        <div >
          <textarea
            onChange={updateNewMessageText}
            placeholder='Enter your message'
            className={s.textareaBlock}
            value={props.state.newMessageText}
          />
        </div>
        <div>
          <button
            onClick={addMessage}
            className={s.buttonBlock}>
            Send message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Messenger;