/* eslint-disable no-undef */
import React from 'react';
import axios from 'axios';

import { connect } from 'react-redux';
import Profile from './Profile';
import { setUserProfile } from '../../redux/profile-reducer';

class ProfileContainer extends React.Component {
  componentDidMount() {
    debugger;
    let userId = this.props.match.params.userId;
    debugger;
    if (!userId) {
      userId = 2;
    }
    
    const apiUrl = `https://social-network.samuraijs.com/api/1.0/profile/2` + userId;
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