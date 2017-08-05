// Import libraries for making a component
import React from 'react';
import { View } from 'react-native';

// Make a component
const MainContent = (props) => {
    const { viewStyle } = styles;

    return (
        <View style={viewStyle}>
            {props.children}
        </View>
    );
};

const styles = {
    viewStyle: {
            backgroundColor: '#F8F8F8',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',

    }
};
// Make the component available to other parts of the App
export { MainContent };
