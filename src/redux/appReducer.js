import { getAuthUserData } from './authReducer'

const INITIALIZED_SUCCESS = 'app/INITIALIZED_SUCCESS'
const TOGGLE_FETCHING = 'app/TOGGLE_FETCHING'


let initialState = {
    initialized: false,
    isFetching: true,
}

const appReducer = (state = initialState, action) => {

    switch (action.type) {

        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            }
        default:
            return state
    }
}

export const initializeSuccess = () => ({ type: INITIALIZED_SUCCESS} )
export const toggleFetching = isFetching => ({ type: TOGGLE_FETCHING, isFetching })


export const initializeApp = () => async dispatch => {
    const promise = await dispatch(getAuthUserData())
    Promise.all([promise]).then(() => dispatch(initializeSuccess()))
}

// export const autoToggleFetching = (wrappedFunction, ...args) => {
//     toggleFetching(true)
//     toggleFetching(false)
// }


export default appReducer
