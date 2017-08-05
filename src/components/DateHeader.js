// Import libraries for making a component
import React from 'react';
import { View, Text } from 'react-native';

// Make a component
const DateHeader = (props) => {
    const { dateHeader } = styles;

    return (
        <View>
            <Text style={dateHeader}>
            {props.displayDate}</Text>
        </View>
    );
};

const styles = {
    dateHeader: {
        color: '#000',
        //textDecorationLine: 'underline',
        height: 20,
        backgroundColor: '#F8F8F8',
        alignSelf: 'flex-start',
        fontSize: 15
    },
};
// Make the component available to other parts of the App
export { DateHeader };
