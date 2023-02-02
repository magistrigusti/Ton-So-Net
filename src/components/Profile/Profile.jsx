import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

  return(
    <div>
      <ProfileInfo />

      <MyPosts postsData={props.profilePage.postsData} 
                newPostText={props.profilePage.newPostText} 
                dispatch={props.dispatch} />
    </div>
  );
}

export default Profile;