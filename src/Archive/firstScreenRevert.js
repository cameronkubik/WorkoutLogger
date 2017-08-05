// Import a library to help create a Component
import React, { Component } from 'react';
import { View } from 'react-native'
import firebase from 'firebase';
import Header from '../components/Header';
import MainContent from '../components/MainContent';
import BannerImage from '../components/BannerImage';
import Button from '../components/common';
import Today from '../components/Today';
// Create a Component
class firstScreen extends Component {

    render() {

        return (
            <View>
                <Header title={'Workout Log - v1.1'} />
                <MainContent>
                    <BannerImage />
                    <Button>
                        Check-In
                    </Button>
                    <Today />
                    <Button onPress={() => firebase.auth().signOut()}>
                        Log Out
                    </ Button>
                </ MainContent>
            </View>
        );

    }
}
// Render it to the device
export default firstScreen;
