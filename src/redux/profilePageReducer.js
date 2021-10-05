import { profileAPI } from '../api/api'

const ADD_POST = 'ADD_POST'
const SET_USER_PROFILE_DATA = 'SET_USER_PROFILE_DATA'
const TOGGLE_FETCHING = 'TOGGLE_FETCHING'
const SET_STATUS = 'SET_STATUS'

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

    isFetching: true,
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

        case SET_USER_PROFILE_DATA:
            return {
                ...state,
                userProfile: {
                    ...action.userProfile,
                    contacts: { ...action.userProfile.contacts },
                    photos: { ...action.userProfile.photos },
                },
            }
        case TOGGLE_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching,
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

export const addPost = newPostText => ({ type: ADD_POST , newPostText})
export const setUserProfileData = userProfile => ({ type: SET_USER_PROFILE_DATA, userProfile })
export const toggleFetching = isFetching => ({ type: TOGGLE_FETCHING, isFetching })
export const setUserStatus = statusText => ({ type: SET_STATUS, statusText })

export const getUserProfile = userId => dispatch => {
    toggleFetching(true)
    profileAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfileData(response.data))
            dispatch(toggleFetching(false))
        })
}
export const getUserStatus = userId => dispatch => {
    // toggleFetching(true)
    profileAPI.getUserStatus(userId)
        .then(response => {
            dispatch(setUserStatus(response.data))
            // dispatch(toggleFetching(false))
        })
}
export const updateUserStatus = statusText => dispatch => {
    // toggleFetching(true)
    profileAPI.updateUserStatus(statusText)
        .then(response => {
            if(response.data.resultCode === 0) {
                dispatch(setUserStatus(statusText))
            }
            // dispatch(toggleFetching(false))
        })
}

export default profilePageReducer
