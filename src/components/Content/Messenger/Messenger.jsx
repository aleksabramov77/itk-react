import React from "react";
import s from "./Messenger.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";



const Messenger = (props) => {
  let dialogsElements = props.dialogs.map((d) => (
    <DialogItem id={d.id} name={d.name} />
  ));

  let messagesElements = props.messages.map((m) => (
    <Message message={m.message} />
  ));


  let onAddMessage = () => {
    props.addMessage()
  };

  let onUpdateNewMessageText = (e) => {
    let newText = e.target.value;
    props.updateNewMessageText(newText);
  }


  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messagesItems}>{messagesElements}</div>
      <div className={s.newMessage}>
        <div >
          <textarea
            onChange={onUpdateNewMessageText}
            placeholder='Enter your message'
            className={s.textareaBlock}
            value={props.newMessageText}
          />
        </div>
        <div>
          <button
            onClick={onAddMessage}
            className={s.buttonBlock}>
            Send message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Messenger;