/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
// import macbook from './macbook.jpg';
import SampleComponent from './SampleComponent';
import StylingReactNative from './StylingReactNativeComponent';
import MaterfiFlexBox from './MateriFlexBox';
import PositionReactNative from './PositionReactNative';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
  <View>
    <ScrollView>
      {/* <SampleComponent />
      <StylingReactNative />
      <MaterfiFlexBox /> */}
      <PositionReactNative />
      </ScrollView>
  </View>
  );
};

export default App;
