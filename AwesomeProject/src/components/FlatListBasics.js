import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';

export default class FlatListBasics extends Component {
    render() {
        return(
        <View style= {{flex: 1, paddingTop: 22}}>
            <FlatList
                data={[
                    {key: 'a', univ: 'KNU'},
                    {key: 'b', univ: 'KNU'},
                    {key: 'c', univ: 'KNU'},
                    {key: 'd', univ: 'KNU'},
                    {key: 'e', univ: 'KNU'},
                    {key: 'f', univ: 'KNU'},
                    {key: 'g', univ: 'KNU'},
                    {key: 'h', univ: 'KNU'},
                    {key: 'i', univ: 'KNU'},
                    {key: 'j', univ: 'KNU'},
                    {key: 'k', univ: 'KNU'},
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