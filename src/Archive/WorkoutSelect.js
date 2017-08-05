// Import libraries for making a component
import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Button } from '../components/common'
// Make a component
class WorkoutSelect extends Component {

    render() {
        return (
            <View style={styles.container}>

                <Button forceStyle={{ marginLeft: 0, maxWidth: 90, padding: 10 }}>Last</ Button>

                <View style={styles.workoutNameBlock}>
                    <Text style={styles.workoutNameStyle}>Chest Day</ Text>
                </View>
                
                <Button forceStyle={{ marginLeft: 0, maxWidth: 90, padding: 10 }}>Next</ Button>

            </ View>
        );
    }
}

const styles = {
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 5,
        width: 325,
        height: 70
    },
    workoutNameBlock: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        //flex: 1,
    },
    workoutNameStyle: {
        fontSize: 23,
        fontWeight: '600',
        color: '#567084',
        textDecorationLine: 'underline'
    },

};


// Make the component available to other parts of the App
export default WorkoutSelect;
