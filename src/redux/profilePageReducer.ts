import {profileAPI} from '../api/api'
import {toggleFetching} from './appReducer'
import {PhotosType, PostType, UserProfileType} from "../types/types";


/* Actions types */

const ADD_POST = 'profilePage/ADD_POST'
const DELETE_POST = 'profilePage/DELETE_POST'
const SET_USER_PROFILE_DATA = 'profilePage/SET_USER_PROFILE_DATA'
const SET_STATUS = 'profilePage/SET_STATUS'
const SET_PROFILE_PHOTO = 'profilePage/SET_PROFILE_PHOTO'


/* Initial state */

type InitialStateType = typeof initialState

const initialState  = {
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
    },
    photos:{
      small:'',
      large:''
    }
  } as UserProfileType,
  postsData: [
    {id: 1, message: 'Hi, how are you', likesCount: 5},
    {id: 2, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', likesCount: 10},
  ] as Array<PostType>,
}


/* Reducer */

const profilePageReducer = (state = initialState, action: any): InitialStateType => {

  switch (action.type) {

    case ADD_POST:
      return {
        ...state,
        postsData: [...state.postsData, {
          id: state.postsData.length + 1, //id counter imitation
          message: action.newPostText,
          likesCount: state.postsData.length + 1  //likes counter imitation
        }],
      }

    case DELETE_POST:
      return {
        ...state,
        postsData: [...state.postsData.filter(p => p.id !== action.id)],
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
        status: action.statusText,
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

type AddPostACType = (newPostText: string) => {
  type: typeof ADD_POST
  newPostText: string
}
export const addPost: AddPostACType = (newPostText) => ({type: ADD_POST, newPostText})

type DeletePostACType = (id: number) => {
  type: typeof DELETE_POST
  id: number
}
export const deletePost: DeletePostACType = (id) => ({type: DELETE_POST, id})

type SetUserProfileDataACType = (userProfile: UserProfileType) => {
  type: typeof SET_USER_PROFILE_DATA
  userProfile: UserProfileType
}
export const setUserProfileData: SetUserProfileDataACType = (userProfile) => ({
  type: SET_USER_PROFILE_DATA,
  userProfile
})

type SetUserStatusACType = (statusText: string) => {
  type: typeof SET_STATUS
  statusText: string
}
export const setUserStatus: SetUserStatusACType = (statusText) => ({type: SET_STATUS, statusText})

type SetProfilePhotoACType = (photos: PhotosType) => {
  type: typeof SET_PROFILE_PHOTO
  photos: PhotosType
}
export const setProfilePhoto: SetProfilePhotoACType = (photos) => ({type: SET_PROFILE_PHOTO, photos})


/* Thunks */

export const getUserProfile = (userId: number) => async (dispatch: any) => {
  toggleFetching(true)
  const response = await profileAPI.getProfile(userId)
  dispatch(setUserProfileData(response.data))
  dispatch(toggleFetching(false))
}

export const getUserStatus = (userId: number) => async (dispatch: any) => {
  const response = await profileAPI.getUserStatus(userId)
  dispatch(setUserStatus(response.data))
}

export const updateUserStatus = (statusText: string) => async (dispatch: any) => {
  try {
    const response = await profileAPI.updateUserStatus(statusText)
    if (response.data.resultCode === 0) {
      dispatch(setUserStatus(statusText))
    }
  } catch (error) {
    // debugger
    alert('Error from thank "updateUserStatus":' + error)
  }
}

export const updatePhoto = (photo: any) => async (dispatch: any) => {
  toggleFetching(true)
  const response = await profileAPI.updatePhoto(photo)
  if (response.data.resultCode === 0) {
    dispatch(setProfilePhoto(response.data.data.photos))
    dispatch(toggleFetching(false))
  }
}

export const updateProfileData = (formData: UserProfileType) => async (dispatch: any) => {
  toggleFetching(true)
  const response = await profileAPI.updateProfileData(formData)
  // debugger
  if (response.data.resultCode === 0) {
    dispatch(getUserProfile(formData.userId))
    dispatch(toggleFetching(false))
  } else {

    const errorsObj: { 'contacts': { [index: string]: string } } = {contacts: {}}
    response.data.messages.map((message: string) => {
      const errorMessage: string = message.split('->')[1].replace(')', '').toLowerCase()
      errorsObj.contacts[errorMessage] = message
    })
    return errorsObj
    // return { [FORM_ERROR]: response.data.messages[0] }
  }
}



/* Default export */

export default profilePageReducer