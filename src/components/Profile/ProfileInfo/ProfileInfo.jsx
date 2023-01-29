import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
  return (
    <div className={classes.contaner}>
      <div className = {classes.profile}>
        <div className = {classes.avatar_wrapper}>
          <img className = {classes.avatar_img} src='https://img.freepik.com/free-photo/fun-backpacker-german-shepherd-dog-cartoon-character_183364-80975.jpg?w=740&t=st=1674793243~exp=1674793843~hmac=c64b395361f44e150c292146f2400ada0de4692d847b6a78afb36ac4bbd0d7f3' alt=""></img>
        </div>

        <div className = {classes.profile_description}>
          <div className = {classes.name}>Kniazich Dmitriy</div>
          <div className = {classes.old}>37</div>
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo;