import {getAuthUserData} from './authReducer'


/* Actions types */

const INITIALIZED_SUCCESS: string = 'app/INITIALIZED_SUCCESS'
const TOGGLE_FETCHING: string = 'app/TOGGLE_FETCHING'


/* Initial state */

type InitialStateType = {
  initialized: boolean
  isFetching: boolean
}
const initialState: InitialStateType = {
  initialized: false,
  isFetching: true
}


/* Reducer */

const appReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true
      }
    case TOGGLE_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching
      }
    default:
      return state
  }
}


/* Action Creators */

type InitializeSuccessACType = () => {
  type: typeof INITIALIZED_SUCCESS
}
export const initializeSuccess: InitializeSuccessACType = () => ({type: INITIALIZED_SUCCESS})

type ToggleFetchingACType = (isFetching: boolean) => {
  type: typeof TOGGLE_FETCHING
  isFetching: boolean
}
export const toggleFetching: ToggleFetchingACType = (isFetching) => ({type: TOGGLE_FETCHING, isFetching})


/* Thunks */

export const initializeApp = () => async (dispatch: any) => {
  const promise = await dispatch(getAuthUserData())
  // debugger
  Promise.all([promise]).then(() => dispatch(initializeSuccess()))
}



/* Default export */

export default appReducer
