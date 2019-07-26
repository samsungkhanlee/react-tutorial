import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class SectionList extends Component {
    render() {
        return(
        <View style= {StyleSheet.container}>
            <SectionList
                sections={[
                    {title: 'A', data: ['a']},
                    {title: 'B', data: ['b', 'c','d','e','f']}
                ]}
                renderItem={({item}) => <Text style={style.item}>{item}</Text>}
                renderSectionHeader={
                    ({section}) => <Text style={Styles.renderSectionHeader}>{section.title}</Text>
                }
                keyExtractor={(item, index) => index}
                />
        </View>         
        );
    }
}

const styles = StyleSheet.create({
    renderSectionHeader : {
      color: 'blue',
      fontWeight: 'bold',
      fontSize: 10,
    },
  });