import React from 'react'
import { Text } from 'react-native'
import { Scene, Router } from 'react-native-router-flux'
import LoginForm from '../components/LoginForm'
import Home from '../home'

const TabIcon = ({ selected, title }) => {
    return (
    <Text style={{ color: selected ? 'red' : 'black' }}>{title}</Text>
    );
}

const RouterComponent = () => {
    return (
        <Router sceneStyle={{ paddingTop: 0 }}>
            <Scene key='tabbar' tabs tabBarStyle={{ backgroundColor: 'gray' }}>

                <Scene key="login" title='Login' icon={TabIcon} >

                    <Scene key="auth" >
                        <Scene key="login" component={LoginForm} title="Workout Log v0.2.1" initial />
                    </Scene>
                    <Scene key="main" initial>
                        <Scene
                            key="home"
                            component={Home}
                            title="Workout Log"
                            showLabel
                            initial
                        />
                    </Scene>

                </Scene>

            </Scene>
        </Router>
    );
};

export default RouterComponent;
