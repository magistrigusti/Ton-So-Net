import React from 'react';
import axios from 'axios';
import classes from './Users.module.css';
import userPhoto from '../../assets/images/user-image.jpg';

class Users extends React.Component {
  componentDidMount() {
    const apiUrl = `https://social-network.samuraijs.com/api/1.0/users?page=${
        this.props.currentPage}&count=${this.props.pageSize}`;
    axios.get(apiUrl).then(response => {
      this.props.setUsers(response.data.items);
    })
  }

  render(props) {

    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
    let pages = [];

    for (let i=1; i <= pagesCount; i++) {
      pages.push(i);
    }

    return (
      <div>
        <div>
          { pages.map(page => {
              return <span className={this.props.currentPage === page && classes.selectedPage}>{page}</span>
            })
          }
        </div>
        
        {
          this.props.users.map(user =>
            <div className={classes.user_card} key={user.id}>
              <span>
                <div className={classes.avatar}>
                  <img className={classes.avatar_img}
                    src={user.photos.small != null ? user.photos.small : userPhoto} alt=""
                  />
                </div>

                <div className={classes.btn_wrapper}>
                  {user.followed ?
                    <button className={classes.btn}
                      onClick={() => { this.props.unfollow(user.id) }}
                    >Unfollow</button>
                    :
                    <button className={classes.btn}
                      onClick={() => { this.props.follow(user.id) }}
                    >Follow</button>
                  }
                </div>
              </span>

              <span className={classes.user_name}>
                <div>{user.name}</div>
                <div>{user.status}</div>
              </span>

              <span className={classes.user_location}>
                <div>{'user.location.country'}</div>
                <div>{'user.location.city'}</div>
              </span>
            </div>
          )
        }
      </div>
    );
  };
};

export default Users;