import s from './ProfileInfo.module.css'
import defaultAvatar from '../../../../assets/images/defaultAvatar.png'
import ProfileStatus from './ProfileStatus/ProfileStatus'
import React from 'react'
import Preloader from '../../../common/Preloader/Preloader'

const ProfileInfo = ({
    authId, userProfile, status, updateUserStatus, isOwner,
    updatePhoto
}) => {

    if (!userProfile.userId) return <Preloader/>

    const onPhotoChoose = e => { updatePhoto(e.target.files[0]) }

    return (
        <div className={s.profileMainBlock}>
            <div className={s.profileAvatarBlock}>
                <img
                    className={s.profileAvatar}
                    alt='userAvatar'
                    src={userProfile.photos.small ? userProfile.photos.small : defaultAvatar}/>
                {isOwner && <input
                    type={'file'}
                    onChange={onPhotoChoose}
                />}
            </div>
            <div className={s.fullNameBlock}>{userProfile.fullName}<br/>{userProfile.userId}</div>
            <div className={s.aboutMeBlock}>{userProfile.aboutMe}</div>
            <div className={s.lookingForAJobDescriptionBlock}>{userProfile.lookingForAJobDescription}</div>
            <div className={s.lookingForAJobBlock}>{userProfile.lookingForAJob}</div>
            <div className={s.contactsBlock}>
                <div className={s.contactsFacebookBlock}>{userProfile.contacts.facebook}</div>
                <div className={s.contactsWebsiteBlock}>{userProfile.contacts.website}</div>
                <div className={s.contactsVkBlock}>{userProfile.contacts.vk}</div>
                <div className={s.contactsTwitterBlock}>{userProfile.contacts.twitter}</div>
                <div className={s.contactsInstagramBlock}>{userProfile.contacts.instagram}</div>
                <div className={s.contactsYoutubeBlock}>{userProfile.contacts.youtube}</div>
                <div className={s.contactsGithubBlock}>{userProfile.contacts.github}</div>
                <div className={s.contactsMainLinkBlock}>{userProfile.contacts.mainLink}</div>
            </div>
            <div className={s.profileStatusBlock}>
                <ProfileStatus
                    authId={authId}
                    userId={userProfile.userId}
                    status={status}
                    updateUserStatus={updateUserStatus}
                />
            </div>


        </div>
    )
}

export default ProfileInfo
