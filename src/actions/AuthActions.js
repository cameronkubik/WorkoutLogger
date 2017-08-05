import firebase from 'firebase'
import { Actions } from 'react-native-router-flux'
import {
    AUTH_UPDATE,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER,
    SIGNUP_USER
} from './types'

export const authUpdate = ({ prop, value }) => {
    return {
        type: AUTH_UPDATE,
        payload: { prop, value }
    };
};

export const loginUser = ({ email, password }) => {
    return (dispatch) => {
        dispatch({ type: LOGIN_USER });

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => loginUserSuccess(dispatch, user))
            .catch(error => loginUserFail(dispatch, error));
    };
};

export const signupUser = ({ email, password }) => {
    return (dispatch) => {
        dispatch({ type: SIGNUP_USER });

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(user => loginUserSuccess(dispatch, user))
            .catch(error => loginUserFail(dispatch, error));
    };
}

const loginUserSuccess = (dispatch, user) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    });

    Actions.main();
}

const loginUserFail = (dispatch, error) => {
    console.log(error);
    dispatch({ type: LOGIN_USER_FAIL });
}
