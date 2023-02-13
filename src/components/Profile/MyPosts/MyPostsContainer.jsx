import React from 'react';
import MyPosts from './MyPosts';
import StoreContent from '../../../StoreContext.js';
import { addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer.js';

const MyPostsContainer = () => {

  return (
    <StoreContent.Consumer>
      {
        (store) => {
          let state = store.getState();
          let onPostChange = (text) => {
            let action = updateNewPostTextActionCreator(text);
            store.dispatch(action);
          }
          let onAddPost = () => {
            store.dispatch(addPostActionCreator());
          }
          return (
            <MyPosts updateNewPostText={ onPostChange } addPost={ onAddPost } 
                    postsData={state.profilePage.postsData} newPostText={state.profilePage.newPostText} />
          )
        }
      }
    </StoreContent.Consumer>
  );
}
export default MyPostsContainer;
