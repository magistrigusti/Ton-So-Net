import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
  return (
          <div className = {classes.wrapper}>
            <div className = {classes.post}>
              <div className = {classes.avatar_wrapper}>
                <img className = {classes.avatar_img} src="https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?w=740&t=st=1672668960~exp=1672669560~hmac=36ac6cccafffa1d286104eb1c759db7a171bb136036368801652784523f43138" alt=""></img>
                
              </div>

              <div className = {classes.post_text}>
                {props.message}
              </div>

              <div className = {classes.like_wrapper}>
                <span>
                  <img className = {classes.like_img} src="https://cdn-icons-png.flaticon.com/512/4207/4207285.png" alt=""></img>
                  {props.likesCount}
                </span>
                <br></br>
                <span>
                  <img className = {classes.like_img} src="https://cdn-icons-png.flaticon.com/512/2665/2665148.png" alt=""></img>
                  {props.dislikesCount}
                </span>
              </div>
            </div>
          </div>
  );
}

export default Post;