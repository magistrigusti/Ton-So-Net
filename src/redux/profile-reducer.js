const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {

  switch (action.type) {
    case ADD_POST:
        let newPost ={
          id: 4,
          message: state.newPostText,
          likesCounter: 4,
          dislikesCounter: 0
        };
        state.postsData.push(newPost);
        state.newPostText = '';
        return state;
    case UPDATE_NEW_POST_TEXT:
        state.newPostText = action.newText;
        return state;
    default: 
        return state;
  }

}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text});

export default profileReducer;