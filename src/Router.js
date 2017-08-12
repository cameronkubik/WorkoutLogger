import React from 'react'
import { Scene, Router } from 'react-native-router-flux'
import LoginScreen from './screens/LoginScreen'
import DailyWorkout from './screens/dailyWorkoutScreen'
import ExerciseInputScreen from './screens/ExerciseInputScreen'

const RouterComponent = () => {

    return (
        <Router sceneStyle={{ paddingTop: 0 }}>

            <Scene key="auth" >
                <Scene
                    key="login"
                    component={LoginScreen}
                    title="Workout Log v0.3.1"
                    initial
                />
            </Scene>

            <Scene key="main" initial>
                <Scene
                    key="dailyWorkout"
                    component={DailyWorkout}
                    title="Today's Workout"
                    initial
                />
                <Scene
                    key="exerciseInputScreen"
                    component={ExerciseInputScreen}
                    //onLeft={Actions.dailyWorkout()}
                />
            </Scene>

        </Router>
    );

};


export default RouterComponent;
