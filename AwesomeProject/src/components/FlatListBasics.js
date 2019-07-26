import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';

export default class FlatListBasics extends Component {
    render() {
        return(
        <View style= {{flex: 1, paddingTop: 22}}>
            <FlatList
                data={[
                    {key: 'a'},
                    {key: 'b'},
                    {key: 'c'},
                    {key: 'd'},
                    {key: 'e'},
                    {key: 'f'},
                    {key: 'g'},
                    {key: 'h'},
                    {key: 'i'},
                    {key: 'j'},
                    {key: 'k'},
                ]}
                renderItem={
                    ({item}) => {
                        return (
                        <Text style={{padding:10, fontSize: 18, height: 44}}>
                            {item.key}
                        </Text>);
                    }    
                }
            />
            </View>
        );
    }
}