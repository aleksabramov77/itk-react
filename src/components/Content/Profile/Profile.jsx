import React from "react";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";



const Profile = (props) => {
    // debugger
  return (
    <div>
      <ProfileInfo className={s.profileInfoBlock}
          userProfile={props.userProfile}
          // smallPhoto={props.smallPhoto}
      />

      <MyPostsContainer className={s.profileInfoBlock}/>
    </div>
  );
};

export default Profile;
