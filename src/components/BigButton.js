import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

const Button = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;

  return (
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
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
    fontSize: 20,
    fontWeight: '600',
    //paddingTop: 10,
    //paddingBottom: 10
  },
  buttonStyle: {
    opacity: 1,
    justifyContent: 'center',
    height: 40,
    width: 200,
    backgroundColor: '#fcfcfc',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#567084',
    marginLeft: 5,
    marginRight: 5,
  }
};

export { Button };
