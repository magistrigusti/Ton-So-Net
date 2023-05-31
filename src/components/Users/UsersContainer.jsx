import React from 'react';
import axios from 'axios';
import Users from './Users.js'
import { connect } from 'react-redux';
import { followActionCreator, unfollowActionCreator, setUsersActionCreator, setCurrentPageActionCreator, setUsersTotalCountActionCreator, toggleIsFetchingActionCreator } from '../../redux/users-reducer.js';
import  imgAlt from './pucMan.svg';



class UsersContainer extends React.Component {
  componentDidMount() {
    const apiUrl = `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize
      }`;
    axios.get(apiUrl).then(response => {
      this.props.setUsers(response.data.items);
      this.props.setTotalUsersCount(response.data.totalCount);
    });
  };

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    const apiUrl = `https://social-network.samuraijs.com/api/1.0/users?page=${
      pageNumber}&count=${this.props.pageSize
    }`;
    axios.get(apiUrl).then(response => {
      this.props.setUsers(response.data.items);
    });
  };

  render (props) {
    return <>
      { this.props.isFetching ? <img src={imgAlt} alt="" /> : null }
      <Users totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        users={this.props.users}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        
      />
    </>
  }

}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followActionCreator(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollowActionCreator(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersActionCreator(users));
    },
    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageActionCreator(pageNumber));
    },
    setTotalUsersCount: (totalCount) => {
      dispatch(setUsersTotalCountActionCreator(totalCount));
    },
    toggleIsFetching: (isFetching) => {
      dispatch(toggleIsFetchingActionCreator(isFetching))
    }

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);