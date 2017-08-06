// Import libraries for making a component
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ListView, View, Text } from 'react-native'
import { beginWorkout, editWorkout } from '../actions'

// Make a component
class TodayExerciseList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ds: new ListView.DataSource({ rowHasChanged: (r1, r2) => { return r1 !== r2; } })
        }
    }

    componentWillMount() {
        this.dataSource = this.state.ds.cloneWithRows(this.props.exerciseList);
    }

    componentWillReceiveProps(nextProps) {
        this.dataSource = this.state.ds.cloneWithRows(nextProps.exerciseList);
    }



    renderRow(exercise) {
        return (
            <View style={styles.exerciseRow}>
                <Text style={styles.exerciseName}>{exercise.name}</ Text>
                <Text style={styles.exerciseSetsReps}>{exercise.setsReps}</ Text>
            </ View>
        );
    }

    render() {
        return (
            <View style={styles.exerciseListContainer}>
                <ListView
                    dataSource={this.dataSource}
                    renderRow={this.renderRow}
                />
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
        fontSize: 15,
        textAlign: 'center',
    },
    exerciseSetsReps: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        paddingLeft: 5
    },
};

const mapStateToProps = state => {
    const { currentWorkout, exerciseList } = state.dailyWorkout;

    return { currentWorkout, exerciseList };
}

// Make the component available to other parts of the App
export default connect(mapStateToProps, { beginWorkout, editWorkout })(TodayExerciseList);
