const AUTHENTICATE = 'authentication/AUTHENTICATE';
const AUTHENTICATION_SUCCESS = 'authentication/AUTHENTICATION_SUCCESS';
const AUTHENTICATION_FAIL = 'authentication/AUTHENTICATION_FAIL';

const LOGOUT = 'authentication/LOGOUT';
const LOGOUT_SUCCESS = 'authentication/LOGOUT_SUCCESS';
const LOGOUT_FAIL = 'authentication/LOGOUT_FAIL';

const __login = (username, password) => {
    return async (client) => (
        await client.post('/auth/session', { username, password })
    )
}

const __logout = () => {
    return async (client) => (
        await client.delete('/auth/session')
    )
}

const __session = () => {
    return async (client) => (
        await client.get('/auth/session')
    )
}

const userSession = () => {
    return {
        types: [AUTHENTICATE, AUTHENTICATION_SUCCESS, AUTHENTICATION_FAIL],
        promise: __session()
    };
}

const userLogin = (username, password) => {
    return {
        types: [AUTHENTICATE, AUTHENTICATION_SUCCESS, AUTHENTICATION_FAIL],
        promise: __login(username, password)
    };
}

const userLogout = () => {
    return {
        types: [LOGOUT, LOGOUT_SUCCESS, LOGOUT_FAIL],
        promise: __logout()
    };
}

export {
    AUTHENTICATE, AUTHENTICATION_SUCCESS, AUTHENTICATION_FAIL,
    LOGOUT, LOGOUT_SUCCESS, LOGOUT_FAIL,
    userLogin,
    userLogout,
    userSession
}
