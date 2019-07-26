import React, {Component} from 'react';
import {View} from 'react-native';
import Blink from './Blink';

export default class BlinkApp extends Component {

    render() {
        return(
            <View>
                <Blink text="로그인"/>
                <Blink text="회원가입"/>
            </View>
        )    
    }
}