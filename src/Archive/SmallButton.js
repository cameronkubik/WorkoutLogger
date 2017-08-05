import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

const SmallButton = ({ onPress, children }) => {
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
    //flex: 1,
    //alignSelf: 'stretch',
    justifyContent: 'center',
    height: 40,
    //width: 140,
    backgroundColor: '#fcfcfc',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#567084',
    marginLeft: 5,
    marginRight: 5,
  }
};

export { SmallButton };
