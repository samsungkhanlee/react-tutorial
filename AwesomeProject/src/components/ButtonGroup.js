import React, {Component} from 'react';
import {Button, View, Image, TouchableHighlight, TouchableOpacity, StyleSheet} from 'react-native';

export default class ButtonGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'name' : 'LSW'
        }
    }
    onPressButton1() {
        alert("버튼 2 클릭")
    }
    alertStateName() {
        alert(this.state.name)
    }
    render() {
        return (
            <View>
                <Button onPress={()=>alert('click')} title="눌러주세요" />
                <Button onPress={this.onPressButton1} title="버튼 2 클릭" 
                        color="#841584" />
                <Button onPress={this.alertStateName.bind(this)} title="이름 보기" />
                <TouchableHighlight onPress={this._onpressButton}>
                    <Image
                        style={styles.button1}
                        source={require('./button.png')}
                    />
                </TouchableHighlight>
                <TouchableOpacity onPress={this._onpressButton}>
                    <Image
                        style={styles.button2}
                        source={require('./button.png')}
                    />
                </TouchableOpacity>
            </View>
            )
    }
}

const styles = StyleSheet.create({
    button1: {
      width: 100,
      height: 100,
    },
    button2: {
        width: 200,
        height: 200,
      },
});