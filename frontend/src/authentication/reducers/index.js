import {
    AUTHENTICATE, AUTHENTICATION_SUCCESS, AUTHENTICATION_FAIL,
    LOGOUT, LOGOUT_SUCCESS
} from '../actions'

const initialState = {
    user: { authenticated: false },
    authenticating: false,
    errorResponse: null
};

export default function (state = initialState, action) {
    switch (action.type) {
        case AUTHENTICATE:
            return {
                ...state,
                authenticating: true
            };
        case AUTHENTICATION_SUCCESS:
            return {
                ...state,
                authenticating: false,
                user: { ...action.result.data },
                errorResponse: null
            }
        case AUTHENTICATION_FAIL:
            return {
                ...initialState,
                errorResponse: action.error
            };
            case LOGOUT:
            return {
                ...state,
                authenticating: true,
            };
            case LOGOUT_SUCCESS:
            return {
                ...state,
                authenticating: false,
                user: { authenticated: false, name: null },
            };
        default:
            return state;
    }
}
