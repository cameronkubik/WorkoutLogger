import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome'
import Today from './components/Today'
import { logout } from './actions'

// Create a Component
class DailyWorkout extends Component {


    render() {
        const { containerStyle } = styles;
        //const store = configureStore
        return (
            <View style={containerStyle}>

                <Today />

                <View style={{ flex: 1 }} />

                <View style={{ alignSelf: 'flex-end' }}>
                    <Icon.Button
                        name='sign-out'
                        color='#d0dcef'
                        size={50}
                        backgroundColor='#F8F8F8'
                        onPress={this.props.logout}
                    />
                </View>

            </ View>
        );

    }
}

const styles = {
    containerStyle: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#F8F8F8',
        paddingTop: 64
    },

}

// Render it to the device
export default connect(null, { logout })(DailyWorkout);
