import { v1 } from 'uuid';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

let initialState = {
  postsData: [
    { id: v1(), message: 'Hi, how are you?', likesCount: '28', dislikesCount: 2 },
    { id: v1(), message: 'It is a social network on the blockchain Ton', likesCount: 22, dislikesCount: 1 },
    { id: v1(), message: 'Are you ready?', likesCount: 30, dislikesCount: 0 }
  ],
  newPostText: '',
  profile: null
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: v1(),
        message: state.newPostText,
        likesCounter: 4,
        dislikesCounter: 0
      };
      let stateCopy = {
        ...state,
        postsData: [...state.postsData, newPost],
        newPostText: ''
      };
      return stateCopy;
      }
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText
      }
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile
      }
    }
    default:
      return state;
  }
}
export const addPostActionCreator = () => ({ type: ADD_POST });
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const updateNewPostTextActionCreator = (text) =>
  ({ type: UPDATE_NEW_POST_TEXT, newText: text });
export default profileReducer;