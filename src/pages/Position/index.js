import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const Position = () => {
    return (
        <View style={styles.wrapper}>
            <Text>Materi Position</Text> 
            <View style={styles.cartWrapper}>
                <Image source={{uri : 'https://www.clipartmax.com/png/middle/92-923676_shopping-cart-png-shopping-basket-icon-transparent.png'}} style={styles.iconCart}/>
                <Text style={styles.notif}>10</Text>
            </View>
            <Text style={styles.text}>Keranjang Belanja Anda</Text>
        </View>
    )
}

export default Position;

const styles = StyleSheet.create({
    wrapper: {
        padding: 20, 
        alignItems: 'center'},

    cartWrapper: {
        borderWidth: 1, 
        borderColor: 'red', 
        width: 93, 
        height: 93, 
        borderRadius: 93/2, 
        alignItems: 'center', 
        justifyContent: 'center', 
        position: 'relative', 
        marginTop: 40},

    iconCart: {
        width: 50, 
        height: 50},

    text: {
        fontSize: 12, 
        color: '#777777', 
        fontWeight: '700', 
        marginTop: 8},

    notif: {
        fontSize: 12, 
        color: 'white', 
        backgroundColor: '#6FCF97', 
        padding: 4, 
        borderRadius: 25, 
        width: 24, 
        height: 24, 
        position: 'absolute', 
        top: 0, 
        right: 0}
})
