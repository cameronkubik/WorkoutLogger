import React from 'react'
import { Scene, Router } from 'react-native-router-flux'
import LoginForm from './screens/LoginForm'
import DailyWorkout from './screens/dailyWorkoutScreen'
import ExerciseInputScreen from './screens/ExerciseInputScreen'

const RouterComponent = () => {
    return (
        <Router sceneStyle={{ paddingTop: 0 }}>

            <Scene key="auth" >
                <Scene
                    key="login"
                    component={LoginForm}
                    title="Workout Log v0.3.1"
                    initial
                />
            </Scene>

            <Scene key="main" initial>
                <Scene
                    key="dailyWorkout"
                    component={DailyWorkout}
                    title="Today's Workout"

                />
                <Scene
                    key="exerciseInputScreen"
                    component={ExerciseInputScreen}
                    title="TODO"
                    initial
                />
            </Scene>

        </Router>
    );
};

export default RouterComponent;
