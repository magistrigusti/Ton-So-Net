import { authAPI } from '../api/api';
import { stopSubmit } from 'redux-form';
import { getAuthUserData } from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

let initialState = {
  nitialized: false,
  globalError: null
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true
      }

    default:
      return state;
  }
}

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS});

export const initializedApp = () => (dispatch) => {
  let promise = dispatch(getAuthUserData());

  Promise.all([promise])
    .then(() => {
      dispatch(initializedSuccess());
    });
}

export default appReducer;