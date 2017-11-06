import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { userLogin } from '../actions';

class Login extends Component {

    onSubmit = (event) => {
        event.preventDefault();
        const { userLogin } = { ...this.props }
        userLogin(this.usernameField.value, this.passwordField.value)
    }

    render() {
        return (
            <div className="col-md-6 col-md-offset-3">
                <h2>Login</h2>
                <form name="form" onSubmit={this.onSubmit.bind(this)} ref={me => this.loginForm = me} noValidate>
                    <div className="form-group" >
                        <label htmlFor="username">Username</label>
                        <input type="text" className="form-control" name="username" ref={me => this.usernameField = me} />
                        {/* <div *ngIf="f.submitted && !username.valid" class="help-block">Username is required</div> */}
                    </div>
                    <div className="form-group" >
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" name="password" ref={me => this.passwordField = me} />
                        {/* <div *ngIf="f.submitted && !password.valid" class="help-block">Password is required</div> */}
                    </div>
                    <div className="form-group">
                        <button disabled={this.props.loading} className="btn btn-primary">Login</button>
                        {/* <img *ngIf="loading" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" /> */}
                    </div>
                </form>
            </div>
        )
    }
}

export default withRouter(
    connect(
        state => ({ ...state }),
        { userLogin }
    )(Login)
)
