import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={s.profileContent}>
      <div className={s.profileAvatar}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"></img>
        <br />
        ava + description
      </div>
      <MyPosts />
    </div>
  );
};

export default Profile;
