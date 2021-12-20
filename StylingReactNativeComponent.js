import React, { Component } from 'react';
import macbook from './macbook.jpg';
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

  const StylingReactNative = () => {
    return(
      <View>
        <Text style={styles.text}>Styling Component</Text>
        <View 
          style={{
            width: 100, 
            height: 100, 
            backgroundColor: '#0abdc3',
            borderWidth: 2,
            borderColor: 'blue',
            marginTop: 20,
            marginLeft: 20
          }} 
        />
        <View style={{padding: 12, backgroundColor: '#F2F2F2', width: 212, borderRadius: 8}}>
          <Image source={macbook} style={{width: 188, height: 107, borderRadius: 8}}/>
          <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: 16}}>
            New Macbook Pro 2020
          </Text>
          <Text style={{fontSize: 12, fontWeight: 'bold', marginTop: 12, color: '#F2994A'}}>
            Rp. 25.000.000
          </Text>
          <Text style={{fontSize: 12, fontWeight: '300', marginTop: 8}}>
            Jakarta Barat
          </Text>
          <View style={{backgroundColor: '#6FCF97', paddingVertical: 6, borderRadius: 25, marginTop: 20}}>
            <Text style={{fontSize: 14, fontWeight: '600', color: 'white', textAlign: 'center'}}>BELI</Text>
          </View>
        </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    text: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#10ac84',
      marginLeft: 20,
      marginTop: 40,
    },
  });

  export default StylingReactNative;