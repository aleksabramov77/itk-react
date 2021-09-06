import React from "react";
import s from "./Messenger.module.css";

const Messenger = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className="dialog">Dimych</div>
                <div className="dialog">Sasha</div>
                <div className="dialog">Viktor</div>
                <div className="dialog">Lena</div>
                <div className="dialog">Misha</div>
                <div className="dialog">Egor</div>
                <div className="dialog">Sveta</div>
                <div className="dialog">Roman</div>
            </div>
            <div className="messages">
                <div className="message">Hi !!!</div>
                <div className="message">How are you ?</div>
                <div className="message">You</div>
                
            </div>
        </div>
    );
};

export default Messenger;
