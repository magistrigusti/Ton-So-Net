import React from 'react';

let Users = (props) => {
  return (
    <div>
      {
        props.users.map(user => <div key={user.id}>
          <span>
            <div>
              <img />
            </div>
            <div>
              <button>follow</button>
            </div>
          </span>
          <span>
            <div>{user.fullName}</div>
            <div>{user.status}</div>
          </span>
          <span>
            <div>{user.location.country}</div>
            <div>{user.location.city}</div>
          </span>
        </div>)
      }
    </div>
  )
}


export default Users;