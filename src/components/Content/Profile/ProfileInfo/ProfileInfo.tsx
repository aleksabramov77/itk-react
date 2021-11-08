import s from './ProfileInfo.module.css'
import defaultAvatar from '../../../../assets/images/defaultAvatar.png'
import ProfileStatus from './ProfileStatus/ProfileStatus'
import React, {ChangeEvent} from 'react'
import Preloader from '../../../common/Preloader/Preloader'
import {Form, Field} from 'react-final-form'
import {composeValidators, required} from '../../../../utils/validators/validators'
import {Input} from '../../../common/FormsControls/FormsControls'
import {UserProfileType} from "../../../../types/types";
import {useDispatch, useSelector} from "react-redux";
import {updatePhoto, updateProfileData} from "../../../../redux/profilePageReducer";
import {AppStateType} from "../../../../redux/redux-store";


type ProfileInfoPropsType = {
  isOwner: boolean
}
const ProfileInfo: React.FC<ProfileInfoPropsType> = ({isOwner}) => {
  const authId = useSelector((state: AppStateType) => state.auth.id)
  const userProfile = useSelector((state: AppStateType) => state.profilePage.userProfile)

  const dispatch = useDispatch()
  const onUpdatePhoto = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files !== null) {
      dispatch(updatePhoto(e.target.files[0]))
    }
  }

  const onUpdateProfileData = (userProfileData: UserProfileType) =>
    dispatch(updateProfileData(userProfileData))


  let [editMode, setEditMode] = React.useState(false)

  if (!userProfile.userId) {
    return <Preloader/>
  }

  return (
    <div className={s.profileMainBlock}>

      {/* display and change Profile Photo block */}
      <div className={s.profileAvatarBlock}>
        <img className={s.profileAvatar} alt='userAvatar'
             src={userProfile.photos.small ? userProfile.photos.small : defaultAvatar}/>
        {isOwner &&
        <input type={'file'} onChange={onUpdatePhoto}/>}
      </div>

      {/* display and change Profile Data block */}
      <div className={s.profileDataBlock}>
        {editMode
          ? <ProfileDataForm userProfile={userProfile} editMode={editMode}
                             exitEditMode={() => {
                               setEditMode(false)
                             }}
                             updateProfileData={onUpdateProfileData}
          />
          : <ProfileData userProfile={userProfile} editMode={editMode} setEditMode={setEditMode}
                         isOwner={isOwner}
          />}
      </div>


      {/* display and change Profile Status block */}
      <div className={s.profileStatusBlock}>
        <ProfileStatus authId={authId} userId={userProfile.userId}/>
      </div>
    </div>
  )
}

type ProfileDataItemPropsType = {
  editMode: boolean
  dataType: string
  dataValue: string | number | null
  name?: string
  type?: string
  validators?: Array<any>
}
const ProfileDataItem: React.FC<ProfileDataItemPropsType> = ({editMode, dataType, dataValue, name = '', type = 'text', validators = []}) => {
  return (
    <div className={s.profileDataItem}>
      <div className={s.profileDataItem_type}>
        <b>{dataType + ': '}</b>
      </div>
      <div className={s.profileDataItem_value}>
        {editMode
          ? <Field
            name={name}
            component={Input}
            type={type}
            placeholder={dataType}
            validate={composeValidators(...validators)}
          />
          : (dataValue || '-')}
      </div>
    </div>)
}

type ProfileDataPropsType = {
  userProfile: UserProfileType
  setEditMode: (editMode: boolean) => void
  isOwner: boolean
  editMode: boolean
}
const ProfileData: React.FC<ProfileDataPropsType> = ({userProfile, setEditMode, isOwner, editMode}) => {
  return (
    <div>
      {isOwner && <button onClick={() => setEditMode(true)}>Edit Info</button>}
      <ProfileDataItem editMode={editMode} dataType='Full name' dataValue={userProfile.fullName}/>
      <ProfileDataItem editMode={editMode} dataType='ID' dataValue={userProfile.userId}/>
      <ProfileDataItem editMode={editMode} dataType='About me' dataValue={userProfile.aboutMe}/>
      <ProfileDataItem editMode={editMode} dataType='Looking for a job'
                       dataValue={userProfile.lookingForAJob ? 'yes' : 'no'}/>
      <ProfileDataItem editMode={editMode} dataType='My profs skills'
                       dataValue={userProfile.lookingForAJobDescription}/>
      <div><b>Contacts</b></div>
      <div className={s.contactsBlock}> {Object.keys(userProfile.contacts).map((k: string) =>
        <ProfileDataItem editMode={editMode} dataType={k} dataValue={userProfile.contacts[k]} key={k}/>)}
      </div>
    </div>
  )
}

type ProfileDataFormPropsType = {
  userProfile: UserProfileType
  editMode: boolean
  exitEditMode: () => void
  updateProfileData: (userProfileData: UserProfileType) => void
}
const ProfileDataForm: React.FC<ProfileDataFormPropsType> = (
  {
    userProfile, editMode, exitEditMode, updateProfileData
  }) => {
  const onSubmit = async (values: any) => {
    const response: any = await updateProfileData(values)
    if (response) return response
    exitEditMode()
  }
  return (
    <Form
      onSubmit={onSubmit}
      initialValues={{...userProfile, ...userProfile.contacts}}
      render={({
                 submitError, handleSubmit, hasValidationErrors,
                 submitting, pristine
               }) => {

        return (
          <form onSubmit={handleSubmit}>
            <button type="submit"
                    disabled={submitting || pristine || hasValidationErrors}>
              Submit
            </button>
            <span>
               {submitError && (' ' + submitError)}
             </span>
            <ProfileDataItem editMode={editMode} dataType='Full name' dataValue={userProfile.fullName}
                             name='fullName' validators={[required]}/>

            <ProfileDataItem editMode={false} dataType='ID' dataValue={userProfile.userId} name='userId'/>

            <ProfileDataItem editMode={editMode} dataType='About me' dataValue={userProfile.aboutMe}
                             name='aboutMe' validators={[required]}/>

            <ProfileDataItem editMode={editMode} dataType='Looking for a job'
                             dataValue={userProfile.lookingForAJob ? 'yes' : 'no'}
                             name='lookingForAJob' type='checkbox'/>

            <ProfileDataItem editMode={editMode} dataType='My profs skills'
                             dataValue={userProfile.lookingForAJobDescription}
                             name='lookingForAJobDescription' validators={[required]}/>

            <div><b>Contacts</b></div>
            <div className={s.contactsBlock}> {Object.keys(userProfile.contacts).map(k =>
              <ProfileDataItem editMode={editMode} dataType={k} dataValue={userProfile.contacts[k]}
                               name={'contacts.' + k} key={k}/>)}
            </div>
          </form>
        )
      }
      }
    />

  )
}

export default ProfileInfo

// const ProfileData = ({ userProfile, setEditMode, isOwner }) => {
//     return (
//         <div>
//             {isOwner && <button onClick={() => setEditMode(true)}>Edit Info</button>}
//             <ProfileDataItem dataType={'Full name'} dataValue={userProfile.fullName}/>
//             <ProfileDataItem dataType={'ID'} dataValue={userProfile.userId}/>
//             <ProfileDataItem dataType={'About me'} dataValue={userProfile.aboutMe}/>
//             <ProfileDataItem dataType={'Looking for a job'} dataValue={userProfile.lookingForAJob ? 'yes' : 'no'}/>
//             <ProfileDataItem dataType={'My profs skills'} dataValue={userProfile.lookingForAJobDescription}/>
//             <div><b>Contacts</b></div>
//             <div className={s.contactsBlock}> {Object.keys(userProfile.contacts).map(k =>
//                 <ProfileDataItem dataType={k} key={k} dataValue={userProfile.contacts[k]}/>)}
//             </div>
//         </div>
//     )
// }
//
// constcreateDataItem(= ({ dataType, dataValue }) => (
//     <div className={s.profileDataItem}>
//         <div className={s.profileDataItem_type}>
//             <b>{dataType + ': '}</b>
//         </div>
//         <div className={s.profileDataItem_value}>
//             {dataValue || '-'}
//         </div>
//     </div>)
//
// const ProfileDataForm = ({ userProfile, onSubmit }) => {
//     let initialValues = { ...userProfile, ...userProfile.contacts }
//     return (
//         <Form
//             onSubmit={onSubmit}
//             initialValues={initialValues}
//
//             render={({
//                 submitError, handleSubmit, type = 'text',
//                 validators = [required, maxLength(25), minLength(5)],
//                 reset, form, submitting, pristine, values,
//             }) => {
//                 return (
//                     <form onSubmit={handleSubmit} className={s.profileDataItem}>
//                         <button type="submit">Submit</button>
//                         <div className={s.profileDataItem_type}>
//                             <b>{'fullName: '}</b>
//                         </div>
//                         <Field
//                             name={'fullName'}
//                             className={s.profileDataItem_value + ' ' + (submitError ? s.submitError : s.correct)}
//                             component={Input}
//                             type={type}
//                             placeholder={'Full name'}
//                             validate={composeValidators(...validators)}
//                         />
//                         <Field
//                             name={'userId'}
//                             className={submitError ? s.submitError : s.correct}
//                             component={Input}
//                             type={type}
//                             placeholder={'ID'}
//                             validate={composeValidators(...validators)}
//                         />
//                         <Field
//                             name={'aboutMe'}
//                             className={submitError ? s.submitError : s.correct}
//                             component={Input}
//                             type={type}
//                             placeholder={'About me'}
//                             validate={composeValidators()}
//                         />
//                         <Field
//                             name={'lookingForAJob'}
//                             className={submitError ? s.submitError : s.correct}
//                             component={Input}
//                             type={'checkbox'}
//                             placeholder={'Looking for a job'}
//                             validate={composeValidators()}
//                         />
//                         <Field
//                             name={'lookingForAJobDescription'}
//                             className={submitError ? s.submitError : s.correct}
//                             component={Input}
//                             type={type}
//                             placeholder={'My profs skills'}
//                             validate={composeValidators()}
//                         />
//
//                         <div><b>Contacts</b></div>
//                         <div className={s.contactsBlock}>
//                             {Object.keys(userProfile.contacts).map(k =>
//                                 <Field key={k}
//                                        name={'contacts.' + k}
//                                        className={submitError ? s.submitError : s.correct}
//                                        component={Input}
//                                        type={type}
//                                        placeholder={k}
//                                        validate={composeValidators()}/>)}
//                         </div>
//                     </form>
//                 )
//             }
//             }
//         />
//
//     )
// }
