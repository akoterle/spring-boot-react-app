import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Provider, connect } from 'react-redux'
import { userSession } from '../../authentication/actions'
import { store } from '../store'
import Home from './Home';
import Login from '../../authentication/components/Login'

const RouteProxyHOC = (ContainedComponent) => {
    return connect(state => ({ ...state }))(
        ({ ...props }) => {
            const { auth = {} } = { ...props }
            return auth.authenticating
                ? null
                : <ContainedComponent { ...props } />
        }
    )
}

const UserLoginRoute = RouteProxyHOC(({ ...props }) => {
    const { auth } = { ...props }
    return auth.user.authenticated
        ? <Redirect to={'/'} />
        : <Login />
})

const InitialLayoutRoute = RouteProxyHOC(({ ...props }) => {
    const { auth } = { ...props }
    return auth.user.authenticated
        ? <Home />
        : <Redirect to={'/login'} />
})

const AppRoutes = () => (
    <div>
        <Switch>
            <Route path="/login" component={UserLoginRoute} />
            <Route path="/*" component={InitialLayoutRoute} />
        </Switch>
    </div>
)

export default class App extends React.Component {

    componentWillMount = () => {
        store.dispatch(userSession())
    }

    render() {
        return (
            <Provider store={store}>
                <Router>
                    <AppRoutes />
                </Router>
            </Provider>
        )
    }
}