import React from 'react';
import Users from './Users';
import { connect } from 'react-redux';
import mapStateToProps from 'react-redux/es/connect/mapStateToProps';
import mapDispatchToProps from 'react-redux/es/connect/mapDispatchToProps';



export default connect()(Users);