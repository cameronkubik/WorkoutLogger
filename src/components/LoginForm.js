import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { loginUser, signupUser, authUpdate } from '../actions'
import { Card, CardSection, Input, Button, Spinner } from './common'
import { BannerImage } from './BannerImage'

class LoginForm extends Component {

    onButtonPress() {
        const { email, password } = this.props;

        this.props.loginUser({ email, password });
    }

    onSignUpPress() {
        const { email, password } = this.props;

        this.props.signupUser({ email, password });
    }

    renderLogInButton() {
        if (this.props.loginLoading) {
            return <Spinner size='large' />
        }

        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Log In
            </ Button>
        );
    }

    renderSignUpButton() {
        if (this.props.signupLoading) {
            return <Spinner size='large' />
        }

        return (
            <Button onPress={this.onSignUpPress.bind(this)}>
                Sign Up
            </ Button>
        );
    }

    render() {
        return (
            <View style={styles.containerStyle}>
                <BannerImage />
                <Card>
                    <CardSection>
                        <Input
                            label='Email'
                            placeholder='user@gmail.com'
                            onChangeText={value => this.props.authUpdate({ prop: 'email', value })}
                            value={this.props.email}
                            autoCapitalize='none'
                        />
                    </ CardSection>

                    <CardSection>
                        <Input
                            label='Password'
                            placeholder='password'
                            onChangeText={value => this.props.authUpdate({ prop: 'password', value })}
                            value={this.props.password}
                            autoCapitalize='none'
                            secureTextEntry
                        />
                    </ CardSection>

                    <Text style={styles.errorTextStyle}>
                        {this.props.error}
                    </ Text>

                    <CardSection>
                        {this.renderLogInButton()}
                    </ CardSection>

                    <CardSection>
                        {this.renderSignUpButton()}
                    </ CardSection>
                </Card>
            </ View>
        );
    }

}

const styles = {
    containerStyle: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        flex: 1
    },
    errorTextStyle: {
        fontSize: 20,
        color: 'red',
        alignSelf: 'center'
    }
};

const mapStateToProps = ({ auth }) => {
    // destructure props from state
    const { email, password, error, loginLoading, signupLoading } = auth
    //these props are defined & named inside the authReducer
    return { email, password, error, loginLoading, signupLoading };
};

//export default LoginForm;
export default connect(mapStateToProps, { loginUser, signupUser, authUpdate })(LoginForm);
