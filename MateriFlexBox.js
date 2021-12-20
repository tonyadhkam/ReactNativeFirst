import React, { Component } from "react";
import photos from './tony2.jpg';
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

class MaterfiFlexBox extends Component {
    render(){
        return (
            <View>
                <View style={{
                    flexDirection: 'row', 
                    backgroundColor: '#c8d6e5', 
                    alignItems: 'center',
                    justifyContent: 'space-between'
                    }}>
                    <View style={{backgroundColor: '#ee5253', width: 50, height: 50}}></View>
                    <View style={{backgroundColor: '#feca57', width: 50, height: 50}}></View>
                    <View style={{backgroundColor: '#1dd1a1', width: 50, height: 50}}></View>
                    <View style={{backgroundColor: '#5f27cd', width: 50, height: 50}}></View>
                </View>
                <View style={{flexDirection: 'row', justifyContent:'space-around'}}>
                    <Text>Beranda</Text>
                    <Text>Video</Text>
                    <Text>Playlist</Text>
                    <Text>Komunitas</Text>
                    <Text>Channel</Text>
                    <Text>Tentang</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20, marginLeft: 6}}>
                    <Image
                        source={photos}
                        style={{width: 100, height: 100, borderRadius: 50, marginRight: 12}}
                    />
                    <View>
                        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Tony Andhika Mahendra</Text>
                        <Text>200 ribu subscriber</Text>
                    </View>
                </View>
            </View>
        );
    }
}

export default MaterfiFlexBox;