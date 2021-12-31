import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import foto from '../../assets/image/tony2.jpg'

const Story = props => {
    return(
        <View style={{alignItems: 'center', marginRight: 20}}>
            <Image source={{uri: props.gambar,}}
            style={{width: 70, height: 70, borderRadius: 70/2}}
            />
            <Text style={{maxWidth: 50, textAlign: 'center'}}>{props.judul}</Text>
        </View>
    )
}

const PropsDinamis = () => {
    return (
        <View>
            <Text>Component Dinamis dengan Props</Text>
            <ScrollView horizontal>
            <View style={{flexDirection: 'row'}}>
            <Story 
                judul="Youtube Channel" 
                gambar="https://www.clipartmax.com/png/middle/92-923676_shopping-cart-png-shopping-basket-icon-transparent.png" 
            />
            <Story 
                judul="Kelas Online" 
                gambar="https://www.clipartmax.com/png/middle/92-923676_shopping-cart-png-shopping-basket-icon-transparent.png"
            />
            <Story 
                judul="Traveling" 
                gambar="https://www.clipartmax.com/png/middle/92-923676_shopping-cart-png-shopping-basket-icon-transparent.png" 
            />
            <Story 
                judul="Kelas Coding Channel" 
                gambar="https://www.clipartmax.com/png/middle/92-923676_shopping-cart-png-shopping-basket-icon-transparent.png" 
            />
            <Story 
                judul="Awaydays" 
                gambar="https://www.clipartmax.com/png/middle/92-923676_shopping-cart-png-shopping-basket-icon-transparent.png"
            />
            <Story 
                judul="Love" 
                gambar="https://www.clipartmax.com/png/middle/92-923676_shopping-cart-png-shopping-basket-icon-transparent.png" 
            />
            </View>
            </ScrollView>
        </View>
    )
}

export default PropsDinamis;

const styles = StyleSheet.create({})
