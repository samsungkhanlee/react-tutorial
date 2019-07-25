import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Blink from './Blink';

export default class BlinkApp extends Component {

    render() {
        return(
            <View>
                <Blink text="HI"/>
                <Blink text="HELLO"/>
                <Blink text="WORLD"/>
            </View>
        )    
    }
}