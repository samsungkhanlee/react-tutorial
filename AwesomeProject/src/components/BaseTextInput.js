import React, { Component } from 'react';
import { TextInput } from 'react-native';

export default class BaseTextInput extends Component {
    constructor(props) {
        super(props);
        this.state = {text : 'Input'};
    }
    render() {
        return (
            <TextInput
                style={{height: 40, width: "80%", borderColor: 'gery', borderWidth: 1}}
                onChangeText={(text) => this.setState({text})}
                value={this.state.text}
                />
            );
    }
}