import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
  return (
    <div className={classes.contaner}>
      <div className = {classes.profile}>
        <div className = {classes.avatar_wrapper}>
          <img className = {classes.avatar_img} src="https://cdn.pixabay.com/photo/2020/11/22/22/17/male-5768177_640.png" alt=""></img>
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