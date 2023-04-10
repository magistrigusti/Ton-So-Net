import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
  return (
    <div className={classes.contaner}>
      <div className = {classes.profile}>
        <div className = {classes.avatar_wrapper}>
          <img className = {classes.avatar_img} src="https://pbs.twimg.com/media/DbyjLh4W0AA3Ue-?format=jpg&name=large" alt=""></img>
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