import React from 'react';
import { Header, Input, Icon, Button, Item } from 'native-base';

export default class SearchBar extends React.Component {
    render() {
        return (
            <Header
                searchBar
                rounded
                style={{ backgroundColor: 'white', margin: 5 }}
            >
                <Item>
                    <Input placeholder="Search videos" />
                    <Icon name="ios-search" />
                </Item>
                <Button transparent />
            </Header>
        );
    }
}
