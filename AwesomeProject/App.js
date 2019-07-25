import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// import Banana from './src/components/Banana';
// import GreetingGroup from './src/components/GreetingGroup';
// import Greeting from './src/components/Greeting';
// import Blink from './src/components/Blink';
// import BlinkApp from './src/components/BlinkApp';
// import StyleApp from './src/components/StyleApp';
import FlexDimensionsBasics from './src/components/FlexDimensionsBasics';
// import FixedDimensionsBasics from './src/components/FixedDimensionsBasics';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>BANANA</Text>
      <Banana></Banana>
      <Greeting></Greeting>
      <GreetingGroup></GreetingGroup>
      <Blink></Blink>
      <BlinkApp></BlinkApp>
      <StyleApp></StyleApp>
      <FlexDimensionsBasics></FlexDimensionsBasics>
      <FixedDimensionsBasics></FixedDimensionsBasics>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
