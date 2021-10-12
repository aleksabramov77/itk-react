import { profileAPI } from '../api/api'
import { toggleFetching } from './appReducer'

const ADD_POST = 'profilePage/ADD_POST'
const DELETE_POST = 'profilePage/DELETE_POST'
const SET_USER_PROFILE_DATA = 'profilePage/SET_USER_PROFILE_DATA'
const SET_STATUS = 'profilePage/SET_STATUS'

let initialState = {
    status: '',
    userProfile: {
        userId: null,
        lookingForAJob: null,
        lookingForAJobDescription: null,
        fullName: null,
        contacts: {
            github: null,
            vk: null,
            facebook: null,
            instagram: null,
            twitter: null,
            website: null,
            youtube: null,
            mainLink: null,
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
    // isFetching: true,
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
                postsData: [...state.postsData.filter(p => p.id != action.id)],
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
        default:
            return state
    }
}

export const addPost = newPostText => ({ type: ADD_POST, newPostText })
export const deletePost = id => ({ type: DELETE_POST, id })
export const setUserProfileData = userProfile => ({ type: SET_USER_PROFILE_DATA, userProfile })
export const setUserStatus = statusText => ({ type: SET_STATUS, statusText })

export const getUserProfile = userId => async dispatch => {
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
    const response = profileAPI.updateUserStatus(statusText)
    if (response.data.resultCode === 0) {
        dispatch(setUserStatus(statusText))
    }
}

export default profilePageReducer
