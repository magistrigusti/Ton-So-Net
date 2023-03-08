import Users from './Users';
import { connect } from 'react-redux';
import { followActionCreator, unfollowActionCreator, setUsersActionCreator} from '../../redux/users-reducer.js';

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users
  }
};

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followActionCreator(userId));
    },
    unfollow: (userId) => {
      dispatch(followActionCreator(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersActionCreator(users));
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Users);