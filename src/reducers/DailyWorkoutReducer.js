import _ from 'lodash'
import {
    LOGOUT, CHANGE_WORKOUT
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
}

export default (state = INITIAL_STATE, action) => {
    console.log(`Action received: ${JSON.stringify(action)}`);

    switch (action.type) {

        case LOGOUT:
            return INITIAL_STATE;

        case CHANGE_WORKOUT:
            return {
                currentWorkout: getNextWorkout(action.payload.currentWorkout, action.payload.direction),
                exerciseList: getExerciseList(getNextWorkout(action.payload.currentWorkout, action.payload.direction))
            };

        default:
            return state;

    }
}

const getNextWorkout = (currentWorkout, direction) => {
    console.log(currentWorkout, direction);
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
    let list;
    console.log(workoutName);
    switch (workoutName) {

        case 'BACK':
            list = [
                { name: 'Lat Pulldown', setsReps: '3x12 reps' },
                { name: 'Seated Cable Row', setsReps: '3x10 reps' },
                { name: 'Incline Lat Shrug', setsReps: '4x15 reps' },
                { name: 'Barbell Shrug', setsReps: '4x10-8-6-4 reps' },
                { name: 'Wide Grip Pull Up', setsReps: '4xAMAP reps' }
            ];
            break;
        case 'ARMS':
            list = [
                { name: 'Incline DB Curl', setsReps: '3x12 reps' },
                { name: 'E-Z Incline Skull Crusher', setsReps: '3x10 reps' },
                { name: 'Vertical DB Iso', setsReps: '4x15 reps' },
                { name: 'Cable Tri-Extensions', setsReps: '4x10-8-6-4 reps' },
                { name: 'Standing BB Curl', setsReps: '4xAMAP reps' }
            ];
            break;
        case 'SHOULDERS':
            list = [
                { name: 'Side Lat Raise', setsReps: '3x12 reps' },
                { name: 'Military Press', setsReps: '4x6 reps' },
                { name: 'Upright Row', setsReps: '3x8 reps' },
                { name: 'Front Plate Raise', setsReps: '3x10 reps' },
                { name: 'Shoulder Finisher', setsReps: '3x15 reps' }
            ];
            break;
        case 'LEGS':
            list = [
                { name: 'Barbell Squat', setsReps: '5x5 reps' },
                { name: 'Walking BB Lunge', setsReps: '3x8/s reps' },
                { name: 'Cannonball Press', setsReps: '3x8 reps' },
                { name: 'Smith Quad Squat', setsReps: '2xAMAP reps' },
            ];
            break;
        default:
            list = [
                { name: 'Dumbbell Bench', setsReps: '3x8-10 reps' },
                { name: 'Dumbbell Fly', setsReps: '3x12 reps' },
                { name: 'Incline DB Press', setsReps: '5x5 reps' },
                { name: 'Cable Press', setsReps: '3x10 reps' },
                { name: 'Pec-Deck', setsReps: '4x6 reps' }
            ];
            break;
    }

    return list;
}
