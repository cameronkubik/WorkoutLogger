import React from 'react'
import { Scene, Router } from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/FontAwesome'
import LoginForm from './components/LoginForm'
import DailyWorkout from './dailyWorkoutScreen'

const renderRightIcon = () => {
    const state = {
        prop: true
    }

    if (state.prop !== 'newState') {
        return null;
    }

    return <Icon />
}

const RouterComponent = () => {
    return (
        <Router sceneStyle={{ paddingTop: 0 }}>

            <Scene key="auth" >
                <Scene key="login" component={LoginForm} title="Workout Log v0.2.1" initial />
            </Scene>

            <Scene key="main" initial>
                <Scene
                    key="dailyWorkout"
                    component={DailyWorkout}
                    title="Today's Workout"
                    rightButton={renderRightIcon}
                    onRight={console.log('hit right')}
                    showLabel
                    initial
                />
            </Scene>

        </Router>
    );
};

export default RouterComponent;
