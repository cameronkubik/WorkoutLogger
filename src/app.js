import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk'
import reducers from './reducers'
import Router from './Router'
//import { configureStore } from './configureStore'


// Create a Component
class App extends Component {

    componentWillMount() {

        const config = {
            apiKey: 'AIzaSyDk5FaQj_z8-XiEMXT_ZBzslPM0YoCYiKc',
            authDomain: 'workout-log-3acb6.firebaseapp.com',
            databaseURL: 'https://workout-log-3acb6.firebaseio.com',
            projectId: 'workout-log-3acb6',
            storageBucket: 'workout-log-3acb6.appspot.com',
            messagingSenderId: '67522518094'
        }

        firebase.initializeApp(config);
    }

    render() {
        // the second param is the initial state, good for server side rendering
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );

    }
}

export default App;
