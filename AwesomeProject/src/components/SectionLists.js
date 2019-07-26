import React, {Component} from 'react';
import {View, Text, StyleSheet, SectionList} from 'react-native';


export default class SectionLists extends Component {
    render() {
        return(
        <View>
            <SectionList
                sections={[
                    {title: 'A', data: ['a']},
                    {title: 'B', data: ['b', 'c','d','e','f']}
                ]}
                renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
                renderSectionHeader={
                    ({section}) => <Text style={styles.renderSectionHeader}>{section.title}</Text>
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
    item :{
        
    }
  });