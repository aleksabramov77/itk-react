import React from "react";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";



const Profile = (props) => {
    // console.log('Profile - status: ', props.status)
  return (
    <div>
      <ProfileInfo className={s.profileInfoBlock}
                   userProfile={props.userProfile}
                   status={props.status}
                   updateUserStatus={props.updateUserStatus}
      />

      <MyPostsContainer
          className={s.profileInfoBlock}
      />
    </div>
  );
};

export default Profile;
