import { getAuthUserData } from './authReducer'

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'
const TOGGLE_FETCHING = 'TOGGLE_FETCHING'


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


export const initializeApp = () => dispatch => {
    // debugger
    let promise = dispatch(getAuthUserData())
    Promise.all([promise]).then(() => dispatch(initializeSuccess()))
    // debugger
}


export default appReducer
