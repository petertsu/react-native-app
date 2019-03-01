import React, { Component } from 'react';
import { Container } from 'native-base';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Main from './layout/Main';

class App extends Component {
    static navigationOptions = {
        title: 'Eddy',
        headerStyle: {
            backgroundColor: '#f4511e'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    };

    render() {
        return (
            <Container>
                <Main />
            </Container>
        );
    }
}

const AppNavigator = createStackNavigator({
    Home: {
        screen: App
    }
});

export default createAppContainer(AppNavigator);
