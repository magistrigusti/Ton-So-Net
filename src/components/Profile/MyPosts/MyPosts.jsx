import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import { addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/state';



export const MyPosts = (props) => {
  let postsElements = props.postsData.map(post => 
                    <Post key={post.id} likesCount={post.likesCount} dislikesCount={post.dislikesCount} message={post.message} />);

  let newPostElement = React.createRef();

  let onPostChange = () => {
    let text = newPostElement.current.value;
    let action = updateNewPostTextActionCreator(text);
    props.dispatch(action);
  }

  let addPost = () => {
      props.dispatch(addPostActionCreator());
  }


  return (
    <div>
      <div className={classes.posts}>
        <div className={classes.input_wrapper}>
          <h5 className={classes.input_title}>New Post</h5>
          <textarea className={classes.input_post}
                    ref={newPostElement}
                    placeholder='Add Post'
                    defaultValue={props.newPostText}
                    onChange={onPostChange}>
          </textarea>
          <button className={classes.button} onClick={ addPost }>Send</button>
        </div>
        
        <div className={classes.array_posts}>
          <h3 className={classes.posts_title}>My Posts</h3>
          { postsElements }
          <br className={classes.br} />
        </div>
      </div>
    </div>
  );
}

export default MyPosts;