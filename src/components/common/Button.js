import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children, forceStyle }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={[buttonStyle, forceStyle]}>
        <Text style={textStyle}>
            {children}
        </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#567084',
    fontSize: 16,
    fontWeight: '600',
    padding: 1
  },
  buttonStyle: {
    //flex: 1,
    //maxHeight: 45,
    //alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#567084',
    padding: 8
  }
};

export { Button };
