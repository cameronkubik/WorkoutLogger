import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'


class ExerciseListScreen extends Component {


    render() {
        return (
                <View style={styles.container}>

                    <View style={styles.imageSection}>
                        <View style={[styles.imageButtonContainer, { justifyContent: 'flex-end', paddingRight: 0, marginRight: 0 }]}>
                            <Icon.Button
                                name="chevron-left"
                                color='#567084'
                                size={40}
                                style={styles.imageChangeButton}
                            />
                        </View>

                        <View
                            style={styles.imageContainer}
                        >
                            <View style={{ flex: 1 }} />
                        </View>

                        <View style={[styles.imageButtonContainer, { justifyContent: 'flex-start' }]}>
                            <Icon.Button
                                name="chevron-right"
                                color='#567084'
                                size={40}
                                style={styles.imageChangeButton}
                            />
                        </View>
                    </View>

                    <View style={styles.userInputSection}>
                        <View style={styles.inputContainer}>
                            <Text>Weight input</Text>
                        </View>
                        <View style={styles.inputContainer}>
                            <Text>Rep input</Text>
                        </View>
                    </View>

                    <View style={styles.logDataSection}>
                        <View style={styles.dataContainer}>
                            <Text>Previous</Text>
                        </View>
                        <View style={styles.dataContainer}>
                            <Text>Max</Text>
                        </View>
                        <View style={styles.dataContainer}>
                            <Text>Average data</Text>
                        </View>
                    </View>

                    <View style={styles.actionButtonSection}>
                        <View style={styles.listViewContainer}>
                            <Icon name='list-ul' size={30} color='#567084' />
                        </View>
                        <View style={styles.navigationArrowContainer}>
                            <Icon name='arrow-left' size={30} color='#567084' style={styles.navIcon} />
                            <Icon name='arrow-right' size={30} color='#567084' style={styles.navIcon} />
                        </View>
                    </View>

                </View>
        );
    }
}

const styles = {
    container: {
        flex: 10,
        marginTop: 64,
        backgroundColor: '#F8F8F8'
    },
    imageSection: {
        flex: 3,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        //borderWidth: 2,
        //borderColor: 'blue',
    },
    userInputSection: {
        flex: 2.5,
        borderWidth: 3,
        borderColor: 'green',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    logDataSection: {
        flex: 2,
        borderWidth: 2,
        borderColor: 'blue',
        flexDirection: 'row'
    },
    actionButtonSection: {
        flex: 2.5,
        borderWidth: 3,
        borderColor: 'green',
        flexDirection: 'row'
    },
    imageChangeButton: {
        //borderColor: 'red',
        //borderWidth: 2,
        backgroundColor: '#F8F8F8',
        flex: 1,

    },
    imageContainer: {
        flex: 2,
        borderWidth: 2,
        borderColor: 'black',

    },
    imageButtonContainer: {
        flex: 0.75,
        flexDirection: 'row',
        alignItems: 'center',
        //borderColor: 'purple',
        //borderWidth: 4,
        alignSelf: 'stretch',
    },
    inputContainer: {
        flex: 1,
        borderWidth: 2,
        borderColor: 'orange',
    },
    dataContainer: {
        flex: 1,
        borderWidth: 2,
        borderColor: 'red',
    },
    listViewContainer: {
        flex: 1,
        borderWidth: 3,
        borderColor: 'red',
    },
    navigationArrowContainer: {
        flex: 2,
        borderWidth: 3,
        borderColor: 'cyan',
        flexDirection: 'row'
    },
    navIcon: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
}

export default connect(null)(ExerciseListScreen);
