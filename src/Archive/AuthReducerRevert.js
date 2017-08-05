import {
    PROCESSING_AUTH, AUTH_SUCCESS, AUTH_FAILURE, ON_EMAIL_INPUT, ON_PASSWORD_INPUT
} from '../constants'

const INITIAL_STATE = {
    email: '',
    password: '',
    processingAuth: null,
    error: '',
    activeSession: false,
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PROCESSING_AUTH:
            return {
                ...state,
                processingAuth: action.auth,
                error: action.error
            }
        case AUTH_SUCCESS:
            return {
                ...state,
                processingAuth: action.auth,
                activeSession: action.session,
                password: action.password,
                error: ''
            }
        case AUTH_FAILURE:
            return {
                ...state,
                processingAuth: action.auth,
                error: action.error,
                password: action.password
            }
        case ON_EMAIL_INPUT:
            return {
                ...state,
                email: action.data
            }
        case ON_PASSWORD_INPUT:
            return {
                ...state,
                password: action.data
            }
        default: // need two more reducers for
            return state;
    }
}
