import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const IconButton = ({ onPress, children, forceStyle }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={[buttonStyle, forceStyle]}>
        <Text style={textStyle}>
            {children}
        </Text>
        <View style={styles.icon}>
            <View style={styles.iconBar} />
            <View style={styles.iconBar} />
            <View style={styles.iconBar} />
        </ View>
    </TouchableOpacity>
  );
};

const styles = {
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        padding: 1
    },
    buttonStyle: {
        flexDirection: 'row',
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        padding: 8,
        justifyContent: 'space-between'
    },
    icon: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: 20,
        marginLeft: 10,
        marginRight: 10
    },
    iconBar: {
        height: 4,
        backgroundColor: '#007aff',
        width: 20,
    }
};

export { IconButton };
