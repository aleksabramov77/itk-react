import React from "react";
import s from "./Messenger.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Messenger = (props) => {
  // debugger
  let dialogsElements = props.state.dialogsData.map((d) => (
    <DialogItem id={d.id} name={d.name} />
  ));

  let messagesElements = props.state.messagesData.map((m) => (
    <Message message={m.message} />
  ));

  let newMessageElement = React.createRef();
  let addMessage = () => {
    let text = newMessageElement.current.value;
    alert(text);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messagesItems}>{messagesElements}</div>
      <div className={s.newMessage}>
        <div >
          <textarea
            ref={newMessageElement}
            className={s.textareaBlock}
          ></textarea>
        </div>
        <div>
          <button onClick={addMessage} className={s.buttonBlock}>
            Add message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Messenger;
