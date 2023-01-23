import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
      <div>
          <h3 className = {classes.posts_title}>My Posts</h3>
          <div className = {classes.posts}>
        
          <div>
            <h5 className = {classes.input_title}>New Post</h5>

            <textarea className = {classes.input_post} placeholder = "Add Post"></textarea>
      
            <button className = {classes.button}>Send</button>
          </div>

          <div className = {classes.array_posts}>
            <Post like = '28' dislike = '2' message = 'Hi, how are you?' />
            <Post like = '22' dislike = '1' message = 'It is a social network on the blockhain'/>
          </div>
        </div>
      </div>
  );
}

export default MyPosts;