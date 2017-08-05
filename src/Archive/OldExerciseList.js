// Import libraries for making a component
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'
import _ from 'lodash'
import { beginWorkout, editWorkout } from '../actions'

// Make a component
class TodayExerciseList extends Component {

    renderRows() {
        const exercises = this.props.exerciseList;
        let list;
        _.each(exercises, (exercise) => {
            list += (
                <View style={styles.exerciseRow}>
                    <Text style={styles.exerciseName}>{exercise.name}</ Text>
                    <Text style={styles.exerciseSetsReps}>{exercise.setsReps}</ Text>
                </ View>
            )
        });

        return list;
    }

    render() {
        return (
            <View style={styles.exerciseListContainer}>
                <View style={styles.exerciseRow}>
                    <Text style={styles.exerciseName}>{this.props.exerciseList[0].name}</ Text>
                    <Text style={styles.exerciseSetsReps}>{this.props.exerciseList[0].setsReps}</ Text>
                </ View>
                <View style={styles.exerciseRow}>
                    <Text style={styles.exerciseName}>{this.props.exerciseList[1].name}</ Text>
                    <Text style={styles.exerciseSetsReps}>{this.props.exerciseList[1].setsReps}</ Text>
                </ View>
                <View style={styles.exerciseRow}>
                    <Text style={styles.exerciseName}>{this.props.exerciseList[2].name}</ Text>
                    <Text style={styles.exerciseSetsReps}>{this.props.exerciseList[2].setsReps}</ Text>
                </ View>
                <View style={styles.exerciseRow}>
                    <Text style={styles.exerciseName}>{this.props.exerciseList[3].name}</ Text>
                    <Text style={styles.exerciseSetsReps}>{this.props.exerciseList[3].setsReps}</ Text>
                </ View>
                <View style={styles.exerciseRow}>
                    <Text style={styles.exerciseName}>{this.props.exerciseList[4].name}</ Text>
                    <Text style={styles.exerciseSetsReps}>{this.props.exerciseList[4].setsReps}</ Text>
                </ View>
            </ View>
        );
    }

}

const styles = {
    exerciseListContainer: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        flex: 1,
        alignSelf: 'stretch',
        //padding: 10
    },
    exerciseRow: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        //borderBottomColor: 'gray',
        //borderBottomRadius: 5,
        //borderBottomWidth: 1,
        margin: 5,
        //paddingBottom: 3
    },
    exerciseName: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 5,
        paddingRight: 5,
        fontWeight: '500',
        fontSize: 16.5,
        textAlign: 'center',
        //textDecorationLine: 'underline'
        //alignSelf: 'center'
        //borderColor: 'green',
        //borderRadius: 5,
        //borderWidth: 1,
    },
    exerciseSetsReps: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        paddingLeft: 5
    },
};

const mapStateToProps = ({ dailyWorkout }) => {
    const { currentWorkout, exerciseList } = dailyWorkout;

    return { currentWorkout, exerciseList };
}

// Make the component available to other parts of the App
export default connect(mapStateToProps, { beginWorkout, editWorkout })(TodayExerciseList);
