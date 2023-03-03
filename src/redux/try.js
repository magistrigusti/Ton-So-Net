import { v1 } from 'uuid';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
  postData: [
    {id: v1(), message: 'Hi, how are you?', likesCount: '28', dislikesCount: 2},
    {id: v1(), message: 'It is a social network on the blockchain Ton', likesCount: 22, dislikesCount: 1},
    {id: v1(), message: 'Are you ready?', likesCount: 30, dislikesCount: 0}
  ],
  newPostText: '',
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost
    }
    default:
  }
}