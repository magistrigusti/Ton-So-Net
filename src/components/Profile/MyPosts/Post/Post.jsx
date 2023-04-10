import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.post}>
        <div className={classes.avatar_wrapper}>
          <img className={classes.avatar_img} src="https://pbs.twimg.com/media/DbyjLh4W0AA3Ue-?format=jpg&name=large" alt="">
          </img>

          <div className={classes.post_text}>
            {props.message}
          </div>
        </div>



        <div className={classes.like_wrapper}>
          <span>
            <img className={classes.like_img} src="https://cdn-icons-png.flaticon.com/512/4207/4207285.png" alt=""></img>
            {props.likesCount}
          </span>
          <br></br>
          <span>
            <img className={classes.like_img} src="https://cdn-icons-png.flaticon.com/512/2665/2665148.png" alt=""></img>
            {props.dislikesCount}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Post;