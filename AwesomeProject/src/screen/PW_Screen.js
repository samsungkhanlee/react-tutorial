import React, { Component } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default class ID_Screen extends Component {
    constructor(props) {
        super(props);
        this.state = {text : 'PW'};
    }
    render() {
        return (
            <View style={StyleSheet.container}>
            <TextInput
                style={{height: 40, width: 700, borderColor: 'gery', borderWidth: 1}}
                onChangeText={(text) => this.setState({text})}
                value={this.state.text}/>    
                <MaterialCommunityIcons name="textbox-password" size={20} color="grey" />
            </View>
        );
    }
}