import React from "react";
import s from "./Messenger.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";



const Messenger = (props) => {
  // debugger
  let dialogsElements = props.dialogsData.map((dialog) => (
    <Dialog id={dialog.id} name={dialog.name} />
  ));

  let messagesElements = props.messagesData.map((message) => (
    <Message message={message.message} />
  ));

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messagesItems}>{messagesElements}</div>
    </div>
  );
};

export default Messenger;
