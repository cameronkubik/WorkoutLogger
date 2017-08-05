// Import libraries for making a component
import React from 'react';
import { View, Image } from 'react-native';

// Make a component
const BannerImage = () => {
    const { bannerStyle, imageStyle } = styles;

    return (
        <View style={bannerStyle}>
            <Image
                source={require('../Images/successTrains.jpg')}
                style={imageStyle}
                resizeMode={'contain'}
            />
        </View>
    );
};

const styles = {
    bannerStyle: {
        height: 150,
        alignSelf: 'center',
        marginBottom: 10,
        marginTop: 64
    },
    imageStyle: {
        height: 150,
        //opacity: 0.6
        //alignSelf: 'stretch',
        //flexDirection: 'row',
        //justifyContent: 'flex-start'
    },
};
// Make the component available to other parts of the App
export { BannerImage };
