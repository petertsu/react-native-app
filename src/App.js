import React, { Component } from 'react';
import { Container } from 'native-base';
import Main from './layout/Main';

export default class App extends Component {
    render() {
        return (
            <Container>
                <Main />
            </Container>
        );
    }
}
