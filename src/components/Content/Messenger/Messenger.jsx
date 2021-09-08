import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Messenger.module.css";

const Dialog = (props) => {
  let path = "/messenger/" + props.id;
  return (
    <div className={s.dialog}>
      <NavLink to={path} activeClassName={s.active}>
        {props.name}
      </NavLink>
    </div>
  );
};

const Messege = (props) => {
  return <div className={s.message}>{props.message}</div>;
};

const Messenger = () => {

  let dialogsData = [
    { id: 1, name: "Dimych" },
    { id: 2, name: "Sasha" },
    { id: 3, name: "Viktor" },
    { id: 4, name: "Lena" },
    { id: 5, name: "Misha" },
    { id: 6, name: "Egor" },
    { id: 7, name: "Sveta" },
    { id: 8, name: "Sveta" },
  ];
  let dialogsElements = dialogsData.map((dialog) => (
    <Dialog id={dialog.id} name={dialog.name} />
  ));

  let messagesData = [
    { id: 1, message: "Hi !!!" },
    { id: 2, message: "How are you ?" },
    { id: 3, message: "Yo" },
    { id: 4, message: "Yo" },
    { id: 5, message: "Yo" },
  ];
  let messagesElements = messagesData.map((message) => (
    <Messege message={message.message} />
  ));
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
    </div>
  );
};

export default Messenger;
