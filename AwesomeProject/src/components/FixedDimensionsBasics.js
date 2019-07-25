import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class FixedDimensionsBasics extends Component {
    render() {
        return(
        <View style= {{flex: 0}}>
            <View style= {{width: 50, height:50, backgroundColor: 'blue'}} />
            <View style= {{width: 100, height:100, backgroundColor: 'black'}} />
            <View style= {{width: 150, height:150, backgroundColor: 'red'}} />
        </View>
        );
    }
}