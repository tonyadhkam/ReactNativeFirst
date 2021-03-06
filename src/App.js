/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
// import macbook from './macbook.jpg';
import SampleComponent from './pages/SampleComponent';
import StylingComponent from './pages/StylingComponent';
import FlexBox from './pages/FlexBox';
import Position from './pages/Position';
import PropsDinamis from './pages/PropsDinamis';
import StateDinamis from './pages/StateDinamis';
import Communication from './pages/Communication';
import CallAPIVanila from './pages/CallAPIVanilla';
import CallAPIAxios from './pages/CallAPIAxios';
import LocalAPI from './pages/LocalAPI';

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
  const [isShow, SetIsShow] = useState(true);
  // useEffect(() => {
  //   setTimeout(() => {
  //     SetIsShow(false)
  //   }, 6000)
  // }, []);

  return (
  <View>
    <ScrollView>
      {/* <SampleComponent /> */}
      {/* <StylingComponent /> */}
      {/* {isShow && <FlexBox />} */}
      {/* <Position /> */}
      {/* <PropsDinamis /> */}
      {/* <StateDinamis /> */}
      {/* <Communication /> */}
      {/* <CallAPIVanila /> */}
      {/* <CallAPIAxios /> */}
      <LocalAPI />
      </ScrollView>
  </View>
  );
};

export default App;
