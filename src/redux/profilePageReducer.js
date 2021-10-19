import { profileAPI } from '../api/api'
import { toggleFetching } from './appReducer'
import { FORM_ERROR } from 'final-form'

const ADD_POST = 'profilePage/ADD_POST'
const DELETE_POST = 'profilePage/DELETE_POST'
const SET_USER_PROFILE_DATA = 'profilePage/SET_USER_PROFILE_DATA'
const SET_STATUS = 'profilePage/SET_STATUS'
const SET_PROFILE_PHOTO = 'profilePage/SET_PROFILE_PHOTO'

let initialState = {
    status: '',
    userProfile: {
        userId: null,
        lookingForAJob: false,
        lookingForAJobDescription: '',
        fullName: '',
        aboutMe: '',

        contacts: {
            // github: null,
            // vk: null,
            // facebook: null,
            // instagram: null,
            // twitter: null,
            // website: null,
            // youtube: null,
            // mainLink: null,
        },
        photos: {
            small: null,
            large: null,
        }
    },
    postsData: [
        { id: 1, message: 'Hi, how are you', likesCount: 5 },
        { id: 2, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', likesCount: 10 },
    ],
}

const profilePageReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_POST:
            let newPost = {
                id: state.postsData.length + 1, //id counter imitation
                message: action.newPostText,
                likesCount: state.postsData.length + 1  //likes counter imitation
            }
            return {
                ...state,
                postsData: [...state.postsData, newPost],
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
                    contacts: { ...action.userProfile.contacts },
                    photos: { ...action.userProfile.photos },
                },
            }

        case SET_STATUS:
            return {
                ...state,
                status: action.statusText,
            }

        case SET_PROFILE_PHOTO:
            // debugger
            return {
                ...state,
                userProfile: {
                    ...state.userProfile,
                    photos: { ...action.photos },
                },
            }

        default:
            return state
    }
}

export const addPost = newPostText => ({ type: ADD_POST, newPostText })
export const deletePost = id => ({ type: DELETE_POST, id })
export const setUserProfileData = userProfile => ({ type: SET_USER_PROFILE_DATA, userProfile })
export const setUserStatus = statusText => ({ type: SET_STATUS, statusText })
export const setProfilePhoto = photos => ({ type: SET_PROFILE_PHOTO, photos })

export const getUserProfile = userId => async dispatch => {
    // debugger
    toggleFetching(true)
    const response = await profileAPI.getProfile(userId)
    dispatch(setUserProfileData(response.data))
    dispatch(toggleFetching(false))
}

export const getUserStatus = userId => async dispatch => {
    const response = await profileAPI.getUserStatus(userId)
    dispatch(setUserStatus(response.data))
}

export const updateUserStatus = statusText => async dispatch => {
    const response = await profileAPI.updateUserStatus(statusText)
    if (response.data.resultCode === 0) {
        dispatch(setUserStatus(statusText))
    }
}

export const updatePhoto = photo => async dispatch => {
    toggleFetching(true)
    const response = await profileAPI.updatePhoto(photo)
    if (response.data.resultCode === 0) {
        dispatch(setProfilePhoto(response.data.data.photos))
        dispatch(toggleFetching(false))
    }
}

export const updateProfileData = formData => async dispatch => {
    toggleFetching(true)
    const response = await profileAPI.updateProfileData(formData)
    // debugger
    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(formData.userId))
        dispatch(toggleFetching(false))
    } else {
        const errorsObj = {contacts:{}}
        response.data.messages.map(m => {
        const errorMessage = m.split('->')[1].replace(')','').toLowerCase()
            errorsObj.contacts[errorMessage] = m
        })
        return errorsObj
        // return { [FORM_ERROR]: response.data.messages[0] }
    }
}

export default profilePageReducer
