import React, { Component } from 'react';
import { View, Image } from 'react-native';

export default class Icon extends Component {
    render() {
        const pic = './icon.jpg'
        return (
        <View>
            <Image source={require('./icon.jpg')}>
            </Image>
        </View>
        )
    }
}