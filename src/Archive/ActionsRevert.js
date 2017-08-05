import {
    PROCESSING_AUTH, AUTH_SUCCESS, AUTH_FAILURE, ON_EMAIL_INPUT, ON_PASSWORD_INPUT
} from './ConstantsRevert'

export function initiateAuth() {
  return {
    type: PROCESSING_AUTH,
    auth: true,
    error: ''
  }
}

export function authSuccess() {
  return {
    type: AUTH_SUCCESS,
    auth: false,
    session: true,
    password: ''
  }
}

export function authFailure() {
  return {
    type: AUTH_FAILURE,
    auth: false,
    error: 'Authentication Failed.',
    password: ''
  }
}

export function onEmailInput(emailText) {
    return {
        type: ON_EMAIL_INPUT,
        data: emailText
    }
}

export function onPasswordInput(passwordText) {
    return {
        type: ON_PASSWORD_INPUT,
        data: passwordText
    }
}
