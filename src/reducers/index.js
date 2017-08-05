import { combineReducers } from 'redux'
import AuthReducer from './AuthReducer'
import DailyWorkoutReducer from './DailyWorkoutReducer'

// each prop in the function below becomes a prop of state
const rootReducer = combineReducers({
    auth: AuthReducer,
    dailyWorkout: DailyWorkoutReducer
});

export default rootReducer;
