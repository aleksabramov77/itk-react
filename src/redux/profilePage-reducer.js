const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const SET_USER_PROFILE_DATA = 'SET_USER_PROFILE_DATA'
// const TOGGLE_FETCHING = 'TOGGLE_FETCHING'
// const SET_CURRENT_USER = 'SET_CURRENT_USER'


let initialState = {
    status: null,
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
    newPostText: null,
    // isFetching: true,
}

const profilePageReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_POST:
            let newPost = {
                id: state.postsData.length + 1, //id counter imitation
                message: state.newPostText,
                likesCount: state.postsData.length + 1  //likes counter imitation
            }
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: ''
            }

        case UPDATE_NEW_POST_TEXT:
            console.log('newPostText: ' + action.newPostText)
            return {
                ...state,
                newPostText: action.newPostText
            }

        case SET_USER_PROFILE_DATA:
            // debugger
            return {
                ...state,
                userProfile: {
                    ...action.userProfile,
                    contacts: { ...action.userProfile.contacts },
                    photos: { ...action.userProfile.photos },
                },
            }
        // case TOGGLE_FETCHING:
        //     // debugger
        //     return {
        //         ...state,
        //         isFetching: action.isFetching,
        //     }


        // case SET_CURRENT_USER:
        //     debugger
        //     return {
        //         ...state,
        //         userProfile: {
        //             userId: action.userId,
        //         },
        //     }

        default:
            return state
    }
}

export const addPost = () => ({ type: ADD_POST })
export const updateNewPostText = newPostText => ({ type: UPDATE_NEW_POST_TEXT, newPostText })
export const setUserProfileData = userProfile => ({ type: SET_USER_PROFILE_DATA, userProfile })
// export const toggleFetching = isFetching => ({ type: TOGGLE_FETCHING, isFetching })
// export const setCurrentUser = userId => ({ type: SET_CURRENT_USER, userId })



export default profilePageReducer
