import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader.js';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  return (
    <div className={classes.contaner}>
      <div className = {classes.profile}>
        <div className = {classes.avatar_wrapper}>
          <img className = {classes.avatar_img} src={props.profile.photos.large} alt=""></img>
        </div>

        <div className = {classes.profile_description}>
          <div className = {classes.name}>{props.profile.fullName}</div>
          <div className = {classes.old}>37</div>
          <div>{props.profile.aboutMe}</div>
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo;