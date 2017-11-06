import React from 'react';
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { userLogout } from '../../authentication/actions';


const Home = ({ ...props }) => (
    <div className="col-md-6 col-md-offset-3">
        <h1>Hi {props.userName}!</h1>
        <p>You're logged in!!</p>
        <p><a name='logout' onClick={props.userLogout}>Logout</a></p>
    </div >
)

export default withRouter(
    connect(state => ({ ...state.auth }, { userLogout }))(Home)
)