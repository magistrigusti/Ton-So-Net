import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

export const MyPosts = (props) => {
  let postsElements = props.postsData.map(post => <Post key={post.id} likesCount={post.likesCount} dislikesCount={post.dislikesCount} message={post.message} />);

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
      props.addPost(text);
      newPostElement.current.value = '';
  }

  let onPostChange = () => {

  }

  return (
    <div>
      
      <div className={classes.posts}>
        <div className={classes.input_wrapper}>
          <h5 className={classes.input_title}>New Post</h5>
          <textarea onChange={onPostChange} value={props.newPostText} ref={newPostElement} className={classes.input_post} placeholder="Add Post"></textarea>
          <button className={classes.button} onClick={ addPost }>Send</button>
        </div>
        
        <div className={classes.array_posts}>
          <h3 className={classes.posts_title}>My Posts</h3>
          {postsElements}
          <br className={classes.br} />
        </div>
      </div>
    </div>
  );
}

export default MyPosts;