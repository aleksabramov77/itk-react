// import React from "react";
import s from './ProfileInfo.module.css'
import defaultAvatar from '../../../../assets/images/defaultAvatar.png'
import ProfileStatus from './ProfileStatus/ProfileStatus'
import React from 'react'
import Preloader from '../../../common/Preloader/Preloader'

const ProfileInfo = (props) => {
    if(!props.userProfile.userId) {
        return <Preloader  />
    }

    return (
        <div className={s.profileMainBlock}>
            <div className={s.profileAvatarBlock}>
                <img

                    className={s.profileAvatar}
                    alt='userAvatar'
                    src={props.userProfile.photos.small ? props.userProfile.photos.small : defaultAvatar}/>
            </div>
            <div className={s.fullNameBlock}>{props.userProfile.fullName}<br/>{props.userProfile.userId}</div>
            <div className={s.aboutMeBlock}>{props.userProfile.aboutMe}</div>
            <div className={s.lookingForAJobDescriptionBlock}>{props.userProfile.lookingForAJobDescription}</div>
            <div className={s.lookingForAJobBlock}>{props.userProfile.lookingForAJob}</div>
            <div className={s.contactsBlock}>
                <div className={s.contactsFacebookBlock}>{props.userProfile.contacts.facebook}</div>
                <div className={s.contactsWebsiteBlock}>{props.userProfile.contacts.website}</div>
                <div className={s.contactsVkBlock}>{props.userProfile.contacts.vk}</div>
                <div className={s.contactsTwitterBlock}>{props.userProfile.contacts.twitter}</div>
                <div className={s.contactsInstagramBlock}>{props.userProfile.contacts.instagram}</div>
                <div className={s.contactsYoutubeBlock}>{props.userProfile.contacts.youtube}</div>
                <div className={s.contactsGithubBlock}>{props.userProfile.contacts.github}</div>
                <div className={s.contactsMainLinkBlock}>{props.userProfile.contacts.mainLink}</div>
            </div>
            <div className={s.profileStatusBlock}>
                <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus}
                />
            </div>


        </div>
    )
}

export default ProfileInfo
