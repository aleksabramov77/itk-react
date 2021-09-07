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
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <Dialog id="1" name="Dimych" />
        <Dialog id="2" name="Sasha" />
        <Dialog id="3" name="Viktor" />
        <Dialog id="4" name="Lena" />
        <Dialog id="5" name="Misha" />
        <Dialog id="6" name="Egor" />
        <Dialog id="7" name="Sveta" />
        <Dialog id="8" name="Roman" />
      </div>
      <div className={s.messages}>
        <Messege message="Hi !!!" />
        <Messege message="How are you ?" />
        <Messege message="Yo" />
        <Messege message="Yo" />
        <Messege message="Yo" />
      </div>
    </div>
  );
};

export default Messenger;
