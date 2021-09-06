import React from "react";
import s from "./Header.module.css";

const Header = () => {
    return (
        <header className={s.header}>
            <img src="https://templates.iqonic.design/socialv/intro/images/logo-full.png"
                 className={s.headerImg} />
        </header>
    );
};

export default Header;
