import firebase from 'firebase'
import { Actions } from 'react-native-router-flux'
import {
    LOGOUT, CHANGE_WORKOUT, BEGIN_WORKOUT, CHANGE_EXERCISE
} from './types'


export const logout = () => {
    return (dispatch) => {

        firebase.auth().signOut()
            .then(() => dispatch({ type: LOGOUT }))
            .catch(error => { console.log(error) })

        Actions.auth();
    };
};

export const changeWorkout = ({ currentWorkout, direction }) => {
    return {
        type: CHANGE_WORKOUT,
        payload: { currentWorkout, direction }
    };
};

export const beginWorkout = () => {
    return (dispatch) => {
        dispatch({ type: BEGIN_WORKOUT });

        Actions.exerciseInputScreen();
    }
}

export const changeExercise = (direction) => {
    return {
        type: CHANGE_EXERCISE,
        payload: direction
    }
}
