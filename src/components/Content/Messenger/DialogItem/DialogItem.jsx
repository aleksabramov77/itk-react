// import React from "react";
import { NavLink } from "react-router-dom";
import s from "./DialogItem.module.css";

const DialogItem = (props) => {
  let path = "/messenger/" + props.id;
  return (
    <div className={s.dialog}>
      <NavLink to={path} activeClassName={s.active}>
        {props.name}
      </NavLink>
    </div>
  );
};


export default DialogItem;
