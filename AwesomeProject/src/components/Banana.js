import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

export default class Banana extends Component {
    render() {
        const pic = {
            uri:'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        }
        return (
        <View>
            <Image source={pic} style={{width:200, height:200}}>

            </Image>
           {/* <Text>1</Text>
            <Text>2</Text>
           <Text>3</Text> */}
        </View>
        )
    }
}
const num1 = 1;
const num2 = 2;
export {num1, num2};