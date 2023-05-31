import React from 'react';
import axios from 'axios';
import Users from './Users.js'


class UsersAPIComponent extends React.Component {
  componentDidMount() {
    const apiUrl = `https://social-network.samuraijs.com/api/1.0/users?page=${
      this.props.currentPage}&count=${this.props.pageSize
      }`;
    axios.get(apiUrl).then(response => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
    })
  }

  onPostChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    const apiUrl = `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`;
    axios.get(apiUrl).then(response => {
      this.props.setUsers(response.data.items);
    })
  }

  render(props) {

    return (
      <Users totalUsersCount={this.props.totalUsersCount} 
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        users={this.props.users}
      />
    );
  };
};

export default UsersAPIComponent;