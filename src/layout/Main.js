import React, { Component } from 'react';

import { Tabs, Tab, TabHeading, Icon } from 'native-base';

import YoutubeTab from '../youtube/YoutubeTab';

export default class Main extends Component {
    render() {
        return (
            <Tabs>
                <Tab
                    heading={
                        <TabHeading>
                            <Icon name="ios-play" />
                        </TabHeading>
                    }
                />

                <Tab
                    heading={
                        <TabHeading>
                            <Icon name="ios-videocam" />
                        </TabHeading>
                    }
                >
                    <YoutubeTab />
                </Tab>

                <Tab
                    heading={
                        <TabHeading>
                            <Icon name="ios-settings" />
                        </TabHeading>
                    }
                />
            </Tabs>
        );
    }
}
