import React from "react";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";



const Profile = ({ authId, userProfile, status, updateUserStatus, isOwner,
    updatePhoto
}) => {
    // console.log('Profile - status: ', status)
    // debugger
    return (
    <div>
      <ProfileInfo className={s.profileInfoBlock}
                   authId={authId}
                   userProfile={userProfile}
                   status={status}
                   updateUserStatus={updateUserStatus}
                   isOwner={isOwner}
                   updatePhoto={updatePhoto}
      />
      <MyPostsContainer
          className={s.profileInfoBlock}
      />
    </div>
  );
};

export default Profile;
