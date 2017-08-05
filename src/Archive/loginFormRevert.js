import React, { Component } from 'react'
import { Text } from 'react-native'
import firebase from 'firebase'
import { connect } from 'react-redux'
import {
    initiateAuth, authSuccess, authFailure, onEmailInput, onPasswordInput
} from '../actions/actions'
import { Button, Card, CardSection, Input, Spinner } from '../components/common'

class LoginForm extends Component {

    onLogInSuccess(user) {
        this.props.onAuthSuccess()

        console.log(user)
    }

    onLogInFail() {
        this.props.onAuthFailure()
    }

    onLogInPress() {
        const { email, password } = this.props
        console.log(this.props)
        this.props.initiateAuth()

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((user) => this.onLogInSuccess(user))
            .catch(() => { this.onLogInFail() })

    }

    onSignUpPress() {
        const { email, password } = this.props;

        this.props.initiateAuth()

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(() => { this.onSignUpSuccess.bind(this) })
            .catch(() => { this.onSignUpFail.bind(this) })

    }

    onSignUpSuccess(user) {
        this.props.onAuthSuccess()
        console.log(user)
    }

    onSignUpFail() {
        this.props.onAuthFailure()
    }

    renderLogInButton() {

        if (this.props.processingAuth) {
            return <Spinner size='small' />
        }

        return (
            <Button
                onPress={this.onLogInPress.bind(this)}
                forceStyle={{ width: 250 }}
            >
                Log in
            </ Button>
        );
    }

    renderSignUpButton() {

        if (this.props.processingAuth) {
            return <Spinner size='small' />
        }
        return (
            <Button
                onPress={this.onSignUpPress.bind(this)}
                forceStyle={{ width: 250 }}
            >
                Sign Up
            </ Button>
        );
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        autoCapitalize='none'
                        placeholder='user@gmail.com'
                        value={this.props.email}
                        onChangeText={email => this.props.onEmailInput(email)}
                        label='Email'
                    />
                </ CardSection>

                <CardSection>
                    <Input
                        autoCapitalize='none'
                        secureTextEntry
                        placeholder='password'
                        value={this.props.password}
                        onChangeText={_password => this.props.onPasswordInput(_password)}
                        label='Password'
                    />
                </ CardSection>

                <Text style={styles.errorStyle}>
                    {this.props.error}
                </ Text>

                <CardSection>
                    {this.renderLogInButton.bind(this)}
                </ CardSection>

                <CardSection>
                    {this.renderSignUpButton.bind(this)}
                </ CardSection>
            </Card>
        );
    }

}

const styles = {
    errorStyle: {
        alignSelf: 'center',
        fontSize: 20,
        color: 'red'
    }
}

function mapStateToProps(state) {
    return state.currentUser
}

function mapDispatchToProps(dispatch) {
    return {
        initiateAuth: () => dispatch(initiateAuth()),
        onAuthSuccess: () => dispatch(authSuccess()),
        onAuthFailure: () => dispatch(authFailure()),
        onEmailInput: (emailText) => dispatch(onEmailInput(emailText)),
        onPasswordInput: (passwordText) => dispatch(onPasswordInput(passwordText)),
    }
}

//export default LoginForm;
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
