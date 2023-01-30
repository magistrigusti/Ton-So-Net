import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
  return (
    <div className={classes.contaner}>
      <div className = {classes.profile}>
        <div className = {classes.avatar_wrapper}>
          <img className = {classes.avatar_img} src="https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?w=740&t=st=1672668960~exp=1672669560~hmac=36ac6cccafffa1d286104eb1c759db7a171bb136036368801652784523f43138" alt=""></img>
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