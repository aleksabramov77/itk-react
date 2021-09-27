// import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div className={s.profileAvatar}>
      <div>
        <img alt='avatar' src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"></img>
      </div>
      <div className={s.descriptionBlock}>ava + description</div>
    </div>
  );
};

export default ProfileInfo;
