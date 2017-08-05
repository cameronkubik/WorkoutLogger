// Import libraries for making a component
import React, { Component } from 'react';
import { Text, View } from 'react-native';
// Make a component
class BoilerPlateClass extends Component {
    state = {
        someObject: {
            prop1: 'first',
            prop2: 'second',
            prop3: 'third'
        },
    };


    render() {
        return (
            <View style={styles.container}>
                <Text>'Hello World'</ Text>
            </ View>
        );
    }
}

const styles = {
    container: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: 155,
        width: 325,
        padding: 10,
        margin: 10,
        borderWidth: 5,
        borderColor: '#000'
    },
};


// Make the component available to other parts of the App
export default BoilerPlateClass;
