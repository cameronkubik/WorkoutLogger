import {
    EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL, LOGIN_USER, SIGNUP_USER, AUTH_UPDATE, LOGOUT
} from '../actions/types'

const INITIAL_STATE = {
    email: '',
    password: '',
    loginLoading: false,
    signupLoading: false,
    error: '',
    user: null,
    session: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case AUTH_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value };

        case EMAIL_CHANGED:
            return { ...state, email: action.payload, error: '' };

        case PASSWORD_CHANGED:
            return { ...state, password: action.payload, error: '' };

        case LOGIN_USER:
            return { ...state, loginLoading: true, error: '' };

        case LOGIN_USER_SUCCESS:
            return { ...state, ...INITIAL_STATE, user: action.payload };

        case LOGIN_USER_FAIL:
            return {
                ...state,
                password: '',
                session: false,
                loginLoading: false,
                error: 'authentication failed'
            };

        case SIGNUP_USER:
            return {
                ...state,
                signupLoading: true,
                error: ''
            };

        case LOGOUT:
            return INITIAL_STATE;

        default:
            return state;

    }
}
