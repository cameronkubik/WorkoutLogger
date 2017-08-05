import React from 'react';
import { Text, View, Image } from 'react-native';
import { SmallButton } from './SmallButton';

const UserDetail = () => {
    const {
        container, thumbnail, column, detail
    } = styles;

    return (
        <View style={container}>
            <View style={thumbnail}>
                <Image />
            </View>
            <View style={column}>
                <Text style={detail}>Cameron Kubik</Text>
                <SmallButton>
                    Measurements
                </ SmallButton>
            </View>
        </View>
    );
};

const styles = {
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 100,
        alignSelf: 'stretch',
        paddingRight: 20,
        paddingLeft: 20,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: 'red'
    },
    thumbnail: {
        width: 90,
        height: 90,
        backgroundColor: '#d3d3d3',
        borderRadius: 4,
        borderColor: '#000000',
        borderWidth: 1,
        //flex: 1
    },
    column: {
        padding: 10,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'stretch',
        height: 100,
        width: 220,
        //borderRadius: 4,
        //borderColor: 'green',
        //borderWidth: 1,
    },
    detail: {
        alignSelf: 'center',
        fontWeight: '400',
        fontSize: 18
    }
};

export { UserDetail };
