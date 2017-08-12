import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, Picker, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
//import _ from 'lodash'


class ExerciseListScreen extends Component {
    state = {
        previousWeight: '50',
        previousReps: '12',
        weights: this.instantiateWeightArray(5),
        reps: this.instantiateRepArray(1)
    }

    instantiateWeightArray(_increment) {
        const weights = [];
        for (let i = 0; i < 20; i++) {
            weights[i] = (i * _increment).toString();
        }

        return weights;
    }

    instantiateRepArray(_increment) {
        const reps = [];
        for (let i = 1; i <= 25; i++) {
            reps[i] = (i * _increment).toString();
        }

        return reps;
    }

    render() {
        console.log(this.state.weights);
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



                    <View style={styles.logDataSection}>
                        <View style={styles.dataContainer}>
                            <Text style={styles.dataTitle}>Previous</Text>
                            <Text style={styles.logData}>120 lbs</Text>
                        </View>

                        <View style={styles.dataContainer}>
                            <Text style={styles.dataTitle}>Max</Text>
                            <Text style={styles.logData}>160 lbs</Text>
                        </View>

                        <View style={styles.dataContainer}>
                            <Text style={styles.dataTitle}>Average</Text>
                            <Text style={styles.logData}>125.5 lbs</Text>
                        </View>
                    </View>

                    <View style={styles.inputTitleSection}>
                        <View style={styles.inputTitle}>
                            <Text style={styles.dataTitle}>Weight</Text>
                        </View>

                        <View style={styles.inputTitle}>
                            <Text style={styles.dataTitle}>Reps</Text>
                        </View>
                    </View>

                    <View style={styles.userInputSection}>
                        <View style={styles.inputContainer}>
                            <ScrollView style={{ flex: 1 }}>
                                <Picker
                                    style={styles.weightPicker}
                                    selectedValue={this.state.previousWeight}
                                    onValueChange={(val, index) => { console.log('value:', val, 'index:', index) }}

                                >
                                    {this.state.weights.map((val) => {
                                        return (<Picker.Item label={val} value={val} key={val} />)
                                    })}
                                </Picker>
                            </ScrollView>
                        </View>
                        <View style={styles.inputContainer}>
                        <ScrollView style={{ flex: 1 }}>
                            <Picker
                                selectedValue={this.state.previousReps}
                                onValueChange={(val, index) => { console.log('value:', val, 'index:', index) }}

                            >
                                {this.state.reps.map((val) => {
                                    return (<Picker.Item label={val} value={val} key={val} />)
                                })}
                            </Picker>
                        </ScrollView>
                        </View>
                    </View>

                    <View style={styles.actionButtonSection}>
                        <View style={styles.listViewContainer}>
                            <Icon name='list-ul' size={60} color='#567084' />
                        </View>
                        <View style={styles.navigationArrowContainer}>
                            <Icon name='arrow-left' size={60} color='#567084' style={styles.navIcon} />
                            <Icon name='arrow-right' size={60} color='#567084' style={styles.navIcon} />
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
        marginTop: 3
        //borderWidth: 2,
        //borderColor: 'blue',
    },
    userInputSection: {
        flex: 2,
        //borderWidth: 1,
        //borderColor: 'red',
        flexDirection: 'row',
        justifyContent: 'center',
        //alignItems: 'stretch'
    },
    logDataSection: {
        flex: 1.5,
        //borderWidth: 2,
        //borderColor: 'blue',
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: '#000',
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        marginTop: 3
    },
    actionButtonSection: {
        flex: 2.5,
        //borderWidth: 3,
        //borderColor: 'green',
        flexDirection: 'row'
    },
    inputTitleSection: {
        flex: 0.5,
        flexDirection: 'row',
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
        //borderWidth: 2,
        //borderColor: 'orange',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputTitle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    dataContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    dataTitle: {
        textDecorationLine: 'underline',
        fontSize: 20,
        color: '#567084',
        marginBottom: 3
    },
    logData: {
        fontSize: 17,
        color: '#000',
        fontWeight: '600'
    },
    listViewContainer: {
        flex: 1,
        //borderWidth: 3,
        //borderColor: 'red',
        justifyContent: 'center',
        alignItems: 'center'
    },
    navigationArrowContainer: {
        flex: 2,
        //borderWidth: 3,
        //borderColor: 'cyan',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    navIcon: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10
    },
    weightPicker: {
        borderRightColor: '#567084',
        borderRightWidth: 1
    }
}

export default connect(null)(ExerciseListScreen);
