import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  let postsElements = props.postsData.map(post => <Post likesCount={post.likesCount} dislikesCount={post.dislikesCount} message={post.message} />)
  return (
    <div>
      <h3 className={classes.posts_title}>My Posts</h3>
      <div className={classes.posts}>
        <div className={classes.array_posts}>
          {postsElements}
          <br />
        </div>

        <div>
          <h5 className={classes.input_title}>New Post</h5>
          <textarea className={classes.input_post} placeholder="Add Post"></textarea>
          <button className={classes.button}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default MyPosts;