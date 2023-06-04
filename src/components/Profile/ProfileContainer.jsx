import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import Profile from './Profile';
import { setUserProfile } from '../../redux/profile-reducer';

class ProfileContainer extends React.Component {
  componentDidMount() {
    const apiUrl = `https://social-network.samuraijs.com/api/1.0/profile/2`;
    axios.get(apiUrl).then(response => {
      this.props.setUserProfile(response.data);
    });
  }

  render() {
    return (
      <Profile {...this.props} profile={this.props.profile} />
    )
  } 
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile
});

export default connect (mapStateToProps, {setUserProfile}) (ProfileContainer);