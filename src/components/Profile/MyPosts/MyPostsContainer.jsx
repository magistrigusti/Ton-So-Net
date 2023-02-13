import React from 'react';
import MyPosts from './MyPosts';
import StoreContent from '../../../StoreContext.js';
import { addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer.js';

const MyPostsContainer = (props) => {

  return (
    <StoreContent.Consumer>
      {
        (store) => {
          let state = props.store.getState();
          let onPostChange = (text) => {
            let action = updateNewPostTextActionCreator(text);
            props.store.dispatch(action);
          }
          let onAddPost = () => {
            props.store.dispatch(addPostActionCreator());
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
