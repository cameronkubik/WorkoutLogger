// Import libraries for making a component
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
//import { Actions } from 'react-native-router-flux'
import { beginWorkout, editWorkout } from '../actions'
import { Button } from './BigButton'
import TodayExerciseList from './TodayExerciseList'

// Make a component
class WorkoutSummary extends Component {

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.summaryRow}>

                    <Text style={styles.workoutHeader}>Exercises</Text>
                    <View style={styles.editIconStyle}>
                        <Icon
                            name='edit'
                            size={30}
                            color='#567084'

                        />
                    </View>

                </View>

                <TodayExerciseList />

                <Button
                    style={styles.buttonStyle}
                    onPress={this.props.beginWorkout}
                >
                    <Text>LIFT</Text>
                </Button>

            </View>
        );
    }

}

const styles = {
    container: {
        backgroundColor: '#F8F8F8',
        borderColor: '#567084',
        borderRadius: 5,
        borderWidth: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: 250,
        width: 310,
        margin: 5,
        padding: 10
    },
    summaryRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 300
    },
    summaryBlock: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
        padding: 5
    },
    workoutHeader: {
        fontSize: 18,
        fontWeight: '500',
        color: '#567084',
        flex: 5,
        textAlign: 'center',
        paddingLeft: 40,
        textDecorationLine: 'underline'
    },
    editIconStyle: {
        flex: 1,
    },
    buttonStyle: {
      height: 35,
      width: 300,
      backgroundColor: '#fcfcfc',
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#567084',
      margin: 5
    }
};

const mapStateToProps = ({ dailyWorkout }) => {
    const { currentWorkout, exerciseList } = dailyWorkout;

    return { currentWorkout, exerciseList };
}

// Render it to the device
export default connect(mapStateToProps, { beginWorkout, editWorkout })(WorkoutSummary);
