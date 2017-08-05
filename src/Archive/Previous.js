// Import libraries for making a component
import React, { Component } from 'react';
import { Text, View } from 'react-native';

// Make a component
class Previous extends Component {
    state = {
        lastWorkout: {
            date: 'Monday, July 3rd',
            bodyWeight: 160,
            efficiency: '92%',
            name: 'Chest'
        }
    };


    render() {
        return (
            <View>
                <Text>Previous</Text>
            </View>
        );
    }
}

// Make the component available to other parts of the App
export default Previous;
