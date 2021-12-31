import React, { Component } from 'react';
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


  const SampleComponent = () => {
    return (
      <View>
        <Text>Tony</Text>
        <Text>Andhika</Text>
        <Text>Mahendra</Text>
        <Gelar/>
        <Foto/>
        <TextInput style={{borderWidth: 1}} />
        <BoxGreen/>
        <Profile/>
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
  
  class BoxGreen extends Component {
    render() {
      return <Text>Ini komponen dari Class</Text>
    }
  };
  
  class Profile extends Component {
    render(){
      return (
        <View> 
        <Image
          source={{uri: 'https://placeimg.com/100/100/animals'}}
          style={{width: 100, height: 100, borderRadius: 25}} 
        />
        <Text style={{color: 'blue', fontSize: 15}}>Ini kucing Oren, senggol dong!</Text>
        </View>
      );
    };
  };

  export default SampleComponent;