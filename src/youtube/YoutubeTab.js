import React, { Component } from 'react';
import { Image } from 'react-native';
import {
    Container,
    Header,
    Content,
    Card,
    CardItem,
    Thumbnail,
    Text,
    H2,
    Button,
    Icon,
    Left,
    Body,
    Item,
    Right,
    Input
} from 'native-base';

import SearchBar from '../components/SearchBar';
import videos from './videos';

export default class YoutubeTab extends Component {
    render() {
        return (
            <Container>
                <SearchBar />
                <Content>
                    {videos.map((video, i) => (
                        <Card key={`video${i}`} style={{ flex: 0 }}>
                            <CardItem
                                cardBody
                                button
                                onPress={() =>
                                    this.props.navigation.navigate(
                                        'YoutubePlayer'
                                    )
                                }
                            >
                                <Image
                                    source={{
                                        uri: video.thumbnails.medium.url
                                    }}
                                    style={{
                                        height: 180,
                                        width: 320,
                                        flex: 1
                                    }}
                                />
                            </CardItem>
                            <CardItem>
                                <Body>
                                    <H2>{video.title}</H2>
                                    <Text style={{ fontSize: 12 }}>
                                        {video.description}
                                    </Text>
                                </Body>
                            </CardItem>
                        </Card>
                    ))}
                </Content>
            </Container>
        );
    }
}
