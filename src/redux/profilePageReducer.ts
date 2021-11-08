import {profileAPI} from '../api/api'
import {AppActionTypes, toggleFetching} from './appReducer'
import {ContactsType, PhotosType, PostType, UserProfileType} from "../types/types";
import {ThunkAction} from "redux-thunk";
import {FORM_ERROR} from "final-form";
import {AppStateType} from "./redux-store";


/* Actions types */

const ADD_POST = 'profilePage/ADD_POST'
const DELETE_POST = 'profilePage/DELETE_POST'
const SET_USER_PROFILE_DATA = 'profilePage/SET_USER_PROFILE_DATA'
const SET_STATUS = 'profilePage/SET_STATUS'
const SET_PROFILE_PHOTO = 'profilePage/SET_PROFILE_PHOTO'


/* Initial state */

type InitialStateType = typeof initialState

const initialState = {
  status: '',
  userProfile: {
    fullName: '',
    userId: 1,
    aboutMe: '',
    lookingForAJob: false,
    lookingForAJobDescription: '',
    contacts: {
      github: '',
      vk: '',
      facebook: '',
      instagram: '',
      twitter: '',
      website: '',
      youtube: '',
      mainLink: '',
    } as ContactsType,
    photos: {
      small: '',
      large: ''
    } as PhotosType
  } as UserProfileType,
  postsData: [
    {id: 1, message: 'Hi, how are you', likesCount: 5},
    {id: 2, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', likesCount: 10},
  ] as Array<PostType>,
}


/* Reducer */

const profilePageReducer = (state = initialState, action: ProfilePageActionTypes): InitialStateType => {

  switch (action.type) {

    case ADD_POST:
      return {
        ...state,
        postsData: [...state.postsData, {
          id: Date.now(), //id counter imitation
          message: action.newPostText,
          likesCount: state.postsData.length + 1  //likes counter imitation
        }]
      }

    case DELETE_POST:
      return {
        ...state,
        postsData: [...state.postsData.filter(p => p.id !== action.id)]
      }

    case SET_USER_PROFILE_DATA:
      return {
        ...state,
        userProfile: {
          ...action.userProfile,
          contacts: {...action.userProfile.contacts},
          photos: {...action.userProfile.photos}
        }
      }

    case SET_STATUS:
      return {
        ...state,
        status: action.status
      }

    case SET_PROFILE_PHOTO:
      return {
        ...state,
        userProfile: {
          ...state.userProfile,
          photos: {...action.photos}
        } as UserProfileType
      }

    default:
      return state
  }
}


/* Action Creators */

type ProfilePageActionTypes = AddPostActionType | DeletePostActionType | SetUserProfileDataActionType
  | SetUserStatusActionType | SetProfilePhotoActionType

type AddPostActionType = {
  type: typeof ADD_POST
  newPostText: string
}
export const addPost = (newPostText: string): AddPostActionType => ({type: ADD_POST, newPostText})

type DeletePostActionType = {
  type: typeof DELETE_POST
  id: number
}
export const deletePost = (id: number): DeletePostActionType => ({type: DELETE_POST, id})

type SetUserProfileDataActionType = {
  type: typeof SET_USER_PROFILE_DATA
  userProfile: UserProfileType
}
export const setUserProfileData = (userProfile: UserProfileType): SetUserProfileDataActionType => ({
  type: SET_USER_PROFILE_DATA,
  userProfile
})

type SetUserStatusActionType = {
  type: typeof SET_STATUS
  status: string
}
export const setUserStatus = (status: string): SetUserStatusActionType => ({type: SET_STATUS, status})

type SetProfilePhotoActionType = {
  type: typeof SET_PROFILE_PHOTO
  photos: PhotosType
}
export const setProfilePhoto = (photos: PhotosType): SetProfilePhotoActionType => ({type: SET_PROFILE_PHOTO, photos})


/* Thunks */

type ThunkType = ThunkAction<Promise<void | { contacts: any }>, AppStateType, any, ProfilePageActionTypes | AppActionTypes>

export const getUserProfile = (userId: number): ThunkType => async (dispatch) => {
  toggleFetching(true)
  const response = await profileAPI.getProfile(userId)
  dispatch(setUserProfileData(response.data))
  dispatch(toggleFetching(false))
}

export const getUserStatus = (userId: number): ThunkType => async (dispatch) => {
  const response = await profileAPI.getUserStatus(userId)
  dispatch(setUserStatus(response.data))
}

export const updateUserStatus = (status: string): ThunkType => async (dispatch) => {
  try {
    const response = await profileAPI.updateUserStatus(status)
    if (response.data.resultCode === 0) {
      dispatch(setUserStatus(status))
    }
  } catch (error) {
    alert('Error from thank "updateUserStatus":' + error)
  }
}

export const updatePhoto = (photo: File): ThunkType => async (dispatch) => {
  toggleFetching(true)
  const response = await profileAPI.updatePhoto(photo)
  if (response.data.resultCode === 0) {
    dispatch(setProfilePhoto(response.data.data.photos))
    dispatch(toggleFetching(false))
  }
}

export const updateProfileData = (userProfileData: UserProfileType): ThunkType => async (dispatch) => {
  toggleFetching(true)
  const response = await profileAPI.updateProfileData(userProfileData)
  if (response.data.resultCode === 0) {
    await dispatch(getUserProfile(userProfileData.userId))
    dispatch(toggleFetching(false))
  } else {
    const errorsObj = {contacts: {}}
    errorsObj.contacts = response.data.messages.reduce((acc: any, curr: string) => {
      const key = curr.split('->')[1].replace(')', '').toLowerCase()
      const val = curr.split(' (')[0]
      return {...acc, [key]: val}
    }, {})
    return errorsObj
    // return { [FORM_ERROR]: response.data.messages[0] }
  }
}


/* Default export */

export default profilePageReducer