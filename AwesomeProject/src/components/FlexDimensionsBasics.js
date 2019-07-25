import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class FlexDimensionsBasics extends Component {
    render() {
        return(
        <View style= {{flex: 1, width: '100%'}}>
            <View style= {{flex: 1, backgroundColor: 'red', justifyContent: "space-around", alignItems: "flex-end"}} />
            <View style= {{flex: 2, backgroundColor: 'black', justifyContent: "space-around", alignItems: "flex-end"}} />
            <View style= {{flex: 3, backgroundColor: 'blue', justifyContent: "space-around", alignItems: "flex-end"}} />
        </View>
        );
    }
};