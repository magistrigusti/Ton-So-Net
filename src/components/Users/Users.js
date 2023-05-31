import React from 'react';
import styles from './Users.module.css';
import userPhoto from '../../assets/images/user-image.jpg';

let Users = (props) => {
  let pagesCount = Math.celi(props.totalUsersCount / props.pageSize);
  let pages = [];

  for (let i=1; i<=pagesCount; i++) {
    pages.push(i)
  }
  return (
    <div>
      <div>
        {pages.map(page => {
          return (
            <span className={props.currentPage === page && styles.selectedPage}
              onClick={(event) => {props.onPageChanged(page)}}
            >{page}</span>
          )
        })}
      </div>

      {
        props.users.map(user => 
          <div className={styles.user_card} key={user.id}>
            <span>
              <div className={styles.avatar}>
                <img className={styles.avatar_img}
                  src={user.pthotos.small != null ? user.photos.small : userPhoto}
                alt='' />
              </div>

              <div className={styles.btn_wrapper}>
                {
                  user.followed ?
                    <button className={styles.btn}
                      onClick={() => {props.unfollow(user.id)}}
                    >Unfollow</button>
                  :
                    <button className={styles.btn}
                      onClick={() => {props.follow(user.id)}}
                    >Follow</button>
                }
              </div>
            </span>
          </div>
        )
      }
    </div>
  )
}

export default Users;