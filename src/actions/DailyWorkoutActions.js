import firebase from 'firebase'
import { Actions } from 'react-native-router-flux'
import {
    LOGOUT, CHANGE_WORKOUT, BEGIN_WORKOUT, NEXT_EXERCISE, PREV_EXERCISE
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

export const nextExercise = () => {
    return (dispatch) => {
        dispatch({ type: NEXT_EXERCISE });

        Actions.exerciseInputScreen({ title: '' });
    }
}

export const prevExercise = () => {
    return (dispatch) => {
        dispatch({ type: PREV_EXERCISE });

        Actions.pop({ refresh: {} });
    }
}
