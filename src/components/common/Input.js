import React from 'react'
import { TextInput, View, Text } from 'react-native'

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry, autoCapitalize }) => {
    const { inputStyle, containerStyle, labelStyle } = styles;

    return (
            <View style={containerStyle}>
                <Text style={labelStyle}>{label}</ Text>
                <TextInput
                    autoCapitalize={autoCapitalize}
                    secureTextEntry={secureTextEntry}
                    placeholder={placeholder}
                    autoCorrect={false}
                    value={value}
                    onChangeText={onChangeText}
                    style={inputStyle}
                />
            </ View>
    );
};

const styles = {
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2,

    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1,
        alignSelf: 'center',
        //borderWidth: 1,
        //borderColor: 'blue',
        textAlign: 'center'
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row'
    }
}

export { Input };
