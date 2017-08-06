// Import libraries for making a component
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import moment from 'moment'
import { changeWorkout } from '../actions'
import { DateHeader } from './DateHeader'
import WorkoutSummary from './WorkoutSummary'
//import CycleSummary from './CycleSummary';
// Make a component
class Today extends Component {

    onLeftArrowPress() {
        this.props.changeWorkout({ currentWorkout: this.props.currentWorkout, direction: 'left' });
    }

    onRightArrowPress() {
        this.props.changeWorkout({ currentWorkout: this.props.currentWorkout, direction: 'right' });
    }

    renderWorkoutTitle(workout) {
        switch (workout) {
            case 'CHEST':
                return 'Chest Day'
            case 'BACK':
                return 'Back Day'
            case 'ARMS':
                return 'Arm Day'
            case 'SHOULDERS':
                return 'Shoulder Day';
            case 'LEGS':
                return 'Leg Day'
            default:
                return 'Error';
        }
    }

    renderDateDisplay() {
        return moment().format('MMMM Do YYYY');
    }

    render() {
        return (
            <View style={styles.todayContainer}>

                <View style={styles.workoutTitleAndButtons}>

                    <Icon.Button
                        name="chevron-left"
                        color='#567084'
                        size={40}
                        style={{ backgroundColor: '#F8F8F8' }}
                        onPress={this.onLeftArrowPress.bind(this)}
                    />

                    <Text style={styles.workoutNameStyle}>{this.renderWorkoutTitle(this.props.currentWorkout)}</Text>

                    <Icon.Button
                        name="chevron-right"
                        color='#567084'
                        size={40}
                        style={{ backgroundColor: '#F8F8F8' }}
                        onPress={this.onRightArrowPress.bind(this)}
                    />

                </View>

                <DateHeader
                    displayDate={this.renderDateDisplay()}
                />

                <WorkoutSummary />

            </ View>
        );
    }
}

const styles = {
    todayContainer: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: 325,
        margin: 10,
        paddingLeft: 15,
        paddingRight: 15,
    },
    workoutNameStyle: {
        fontSize: 23,
        fontWeight: '600',
        color: '#567084',
        textDecorationLine: 'underline',
    },
    workoutTitleAndButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 325,
    },
};
// add session to args
const mapStateToProps = ({ dailyWorkout }) => {
    const { currentWorkout, exerciseList } = dailyWorkout;

    return { currentWorkout, exerciseList };
}


// Make the component available to other parts of the App
export default connect(mapStateToProps, { changeWorkout })(Today);
