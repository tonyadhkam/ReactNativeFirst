/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
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
      <Text>Tony</Text>
      <Text>Andhika</Text>
      <Text>Mahendra</Text>
      <Gelar/>
      <Foto/>
      <TextInput style={{borderWidth: 1}} />
    </View>
  );
};

const Gelar = () => {
  return <Text>S.Kom.</Text>;
};

const Foto = () => {
  return (
    <Image 
      source={{uri: 'https://placeimg.com/100/100/tech'}}
      style={{width: 100, height: 100}}
    />
  );
};

export default App;
