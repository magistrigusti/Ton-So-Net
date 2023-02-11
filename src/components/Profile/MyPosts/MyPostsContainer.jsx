import React from 'react';
import MyPosts from './MyPosts';
import { addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer.js';

const MyPostsContainer = (props) => {
  let state = props.store.getState();

  let onPostChange = (text) => {
    let action = updateNewPostTextActionCreator(text);
    props.store.dispatch(action);
  }
  let onAddPost = () => {
    props.store.dispatch(addPostActionCreator());
  }

  return ( <MyPosts updateNewPostText={ onPostChange } addPost={ onAddPost } 
                    postsData={state.profilePage.postsData} newPostText={state.profilePage.newPostText} /> )
}
export default MyPostsContainer;
