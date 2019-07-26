import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// import Banana from './src/components/Banana';
// import GreetingGroup from './src/components/GreetingGroup';
// import Greeting from './src/components/Greeting';
import Blink from './src/components/Blink';
import BlinkApp from './src/components/BlinkApp';
// import StyleApp from './src/components/StyleApp';
// import FlexDimensionsBasics from './src/components/FlexDimensionsBasics';
// import FixedDimensionsBasics from './src/components/FixedDimensionsBasics';
// import BaseTextInput from './src/components/BaseTextInput';
// import ButtonGroup from './src/components/ButtonGroup';
// import FlatListBasics from './src/components/FlatListBasics';
// import SectionLists from './src/components/SectionLists';
import ID_Screen from './src/screen/ID_Screen';
import PW_Screen from './src/screen/PW_Screen';
import Icon from './src/screen/Icon'


export default function App() {
  return (
    <View style={styles.container}> 
      {/* <Text>BANANA</Text> */}
      {/* <Banana></Banana> */}
      {/* <Greeting></Greeting> */}
      {/* <GreetingGroup></GreetingGroup> */}
      {/* <StyleApp></StyleApp> */}
      {/* <FlexDimensionsBasics></FlexDimensionsBasics> */}
      {/* <FixedDimensionsBasics></FixedDimensionsBasics> */}
      {/* <BaseTextInput></BaseTextInput> */}
      {/* <ButtonGroup></ButtonGroup> */}
      {/* <FlatListBasics></FlatListBasics> */}
      {/* <SectionLists></SectionLists> */}
      <Icon></Icon>
      <ID_Screen></ID_Screen>
      <PW_Screen></PW_Screen>
      <Blink></Blink>
      <BlinkApp></BlinkApp>
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
