import _ from 'lodash'
import {
    LOGOUT, CHANGE_WORKOUT, CHANGE_EXERCISE
} from '../actions/types'

const INITIAL_STATE = {
    currentWorkout: 'CHEST',
    exerciseList: [
        { name: 'Dumbbell Bench', setsReps: '3x8-10 reps' },
        { name: 'Dumbbell Fly', setsReps: '3x12 reps' },
        { name: 'Incline DB Press', setsReps: '5x5 reps' },
        { name: 'Cable Press', setsReps: '3x10 reps' },
        { name: 'Pec-Deck', setsReps: '4x6 reps' }
    ],
    currentExerciseIndex: 0
}

export default (state = INITIAL_STATE, action) => {
    console.log(action);

    switch (action.type) {

        case LOGOUT:
            return INITIAL_STATE;

        case CHANGE_WORKOUT:
            return {
                ...state,
                currentWorkout: getNextWorkout(action.payload.currentWorkout, action.payload.direction),
                exerciseList: getExerciseList(getNextWorkout(state.currentWorkout, action.payload.direction)),
                currentExerciseIndex: 0
            };

        case CHANGE_EXERCISE:
            return {
                ...state,
                currentExerciseIndex: getNextExerciseIndex(state.currentExerciseIndex, action.payload)
            };

        default:
            return state;

    }
}

const getNextExerciseIndex = (_currentIndex, _direction) => {

    const currentIndex = parseInt(_currentIndex, 10);

    if (_direction === 'prev') {
        if (currentIndex === 0) {
            return 4;
        }
        return currentIndex - 1;
    }
    // else direction === next
    if (currentIndex === 4) {
        return 0;
    }
    // else currentIndex !== 4
    return currentIndex + 1;
}

const getNextWorkout = (currentWorkout, direction) => {
    const workouts = ['CHEST', 'BACK', 'SHOULDERS', 'ARMS', 'LEGS'];

    const currentIndex = _.findIndex(workouts, (workout) => { return workout === currentWorkout; });
    let nextIndex;

    if (direction === 'left') {
        nextIndex = currentIndex === 0 ? 4 : currentIndex - 1;
    } else {
        nextIndex = currentIndex === 4 ? 0 : currentIndex + 1;
    }

    return workouts[nextIndex];
}


const getExerciseList = (workoutName) => {
    switch (workoutName) {

        case 'BACK':
            return [
                { name: 'Lat Pulldown', setsReps: '3x12 reps' },
                { name: 'Seated Cable Row', setsReps: '3x10 reps' },
                { name: 'Incline Lat Shrug', setsReps: '4x15 reps' },
                { name: 'Barbell Shrug', setsReps: '4x10-8-6-4 reps' },
                { name: 'Wide Grip Pull Up', setsReps: '4xAMAP reps' }
            ];
        case 'ARMS':
            return [
                { name: 'Incline DB Curl', setsReps: '3x12 reps' },
                { name: 'E-Z Skull Crusher', setsReps: '3x10 reps' },
                { name: 'Vertical DB Iso', setsReps: '4x15 reps' },
                { name: 'Cable Tri-Ext', setsReps: '4x10-8-6-4 reps' },
                { name: 'Standing BB Curl', setsReps: '4xAMAP reps' }
            ];
        case 'SHOULDERS':
            return [
                { name: 'Side Lat Raise', setsReps: '3x12 reps' },
                { name: 'Military Press', setsReps: '4x6 reps' },
                { name: 'Upright Row', setsReps: '3x8 reps' },
                { name: 'Front Plate Raise', setsReps: '3x10 reps' },
                { name: 'Shoulder Finisher', setsReps: '3x15 reps' }
            ];
        case 'LEGS':
            return [
                { name: 'Barbell Squat', setsReps: '5x5 reps' },
                { name: 'Walking BB Lunge', setsReps: '3x8/s reps' },
                { name: 'Cannonball Press', setsReps: '3x8 reps' },
                { name: 'Smith Quad Squat', setsReps: '2xAMAP reps' },
                { name: 'Leg Extensions', setsReps: '3x12 reps' },
            ];
        default:
            return [
                { name: 'Dumbbell Bench', setsReps: '3x8-10 reps' },
                { name: 'Dumbbell Fly', setsReps: '3x12 reps' },
                { name: 'Incline DB Press', setsReps: '5x5 reps' },
                { name: 'Cable Press', setsReps: '3x10 reps' },
                { name: 'Pec-Deck', setsReps: '4x6 reps' }
            ];
    }
}
