import React from 'react';
import classes from './Users.module.css';

let Users = (props) => {
  
  if (props.users.length === 0 ) {
    props.setUsers(
    [
      {id: 1, photoUrl: "https://cdn-icons-png.flaticon.com/512/4202/4202836.png", followed: true, fullName: 'Dmitrii', status: 'I am a boss', location: {city: 'Holon', country: 'Izrael'}},
        {id: 2, photoUrl: "https://cdn-icons-png.flaticon.com/512/4202/4202832.png", followed: false, fullName: 'Maria', status: 'I am a user', location: {city: 'Ramat-Gan', country: 'Izrael'}},
        {id: 3, photoUrl: "https://cdn-icons-png.flaticon.com/512/4202/4202839.png", followed: false, fullName: 'Andry', status: 'I am a user', location: {city: 'Bat-Yam', country: 'Izrael'}},
        {id: 4, photoUrl: "https://cdn-icons-png.flaticon.com/512/9416/9416234.png", followed: true, fullName: 'Sasha', status: 'I am a user', location: {city: 'Moscow', country: "Russia"}},
        {id: 5, photoUrl: "https://cdn-icons-png.flaticon.com/512/4202/4202840.png", followed: false, fullName: 'Adi', status: 'i am a user', location: {city: 'Tel-Aviv', country: 'Izrael'}},
        {id: 6, photoUrl: "https://cdn-icons-png.flaticon.com/512/4202/4202840.png", followed: false, fullName: 'Ivan', status: 'i am a user', location: {city: 'Mscow', country: 'Russia'}}
    ]
  )
  }

  return (
    <div>
      {
        props.users.map(user => <div className={classes.user_card} key={user.id}>
          <span>
            <div className={classes.avatar}>
              <img className={classes.avatar_img} src={user.photoUrl} />
            </div>
            <div className={classes.btn_wrapper}>
              { user.followed ? 
                <button className={classes.btn} onClick={ () => { props.unfollow(user.id)}} >Unfollow</button> 
                : 
                <button className={classes.btn} onClick={ () => { props.follow(user.id)}} >Follow</button>}
            </div>
          </span>
          <span className={classes.user_name}>
            <div>{user.fullName}</div>
            <div>{user.status}</div>
          </span>
          <span className={classes.user_location}>
            <div>{user.location.country}</div>
            <div>{user.location.city}</div>
          </span>
        </div>)
      }
    </div>
  )
}


export default Users;