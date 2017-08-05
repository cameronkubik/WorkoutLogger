// Import libraries for making a component
import React from 'react';
import { View, Text } from 'react-native';

// Make a component
const CycleSummary = (props) => {
    const {
        container, summaryRow, summaryBlock, cycleNameTitle,
        progressBarContainer, progressMeter, workoutsRemainingContainer,
        remainingText
    } = styles;
    const { cycleTitle, liftsLeft } = props;

    return (
        <View style={container}>
            <View style={summaryRow}>
                <View style={summaryBlock}>
                    <Text style={cycleNameTitle}>
                    {cycleTitle}</ Text>
                </View>
            </ View>
            <View style={progressBarContainer}>
                <View style={progressMeter} />
            </ View>
            <View style={workoutsRemainingContainer}>
                <Text style={remainingText}>{liftsLeft}</ Text>
            </ View>
        </View>
    );
};

const styles = {
    container: {
        backgroundColor: '#F8F8F8',
        //borderColor: '#567084',
        //borderRadius: 5,
        //borderWidth: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: 310,
        //marginTop: 0,
        marginBottom: 5,
        //padding: 5
    },
    summaryRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    summaryBlock: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        flex: 1,
        //paddingTop: 5,
        //backgroundColor: 'red',
    },
    cycleNameTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#567084',
        marginBottom: 5
    },
    progressBarContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        height: 25,
        width: 300,
        borderColor: '#000',
        borderWidth: 2,
        borderRadius: 8
    },
    progressMeter: {
        backgroundColor: '#44c453',
        borderColor: 'green',
        borderWidth: 1,
        borderRadius: 6,
        width: 190
    },
    workoutsRemainingContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 25,

    },
    remainingText: {
        fontWeight: '400'
    },
};
// Make the component available to other parts of the App
export { CycleSummary };
