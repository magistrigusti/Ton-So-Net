import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css';

const Profile = (props) => {
  return(
    <div>
        <div className = {classes.profile}>
          <div className = {classes.avatar_wrapper}>
            <img className = {classes.avatar_img} src='https://img.freepik.com/free-vector/cute-cartoon-creature-blue-color-with-horns-feel-dizzy-illustration_1284-64077.jpg?w=740&t=st=1672674154~exp=1672674754~hmac=d4da7724049ce059a9ae45ace751c0507f93a4f9d109cb9ab7f8347e039c007f' alt=""></img>
          </div>

          <div className = {classes.profile_description}>
            Kniazich Dmitriy
          </div>
        </div>

        <MyPosts />
        
        <h4 className = {classes.footer_title}>--- User Content ---</h4>
      </div>
  );
}

export default Profile;