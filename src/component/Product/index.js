import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import macbook from '../../assets/image/macbook.jpg'

const ProductMac = (props) => {
    return (
        <View style={styles.wrapper}>
            <Image source={macbook} style={styles.imageProduct}/>
            <Text style={styles.productName}>
                New Macbook Pro 2020
            </Text>
            <Text style={styles.productPrice}>
                Rp. 25.000.000
            </Text>
            <Text style={styles.productLocation}>
                Jakarta Barat
            </Text>
            <TouchableOpacity onPress={props.onButtonPress}>
            <View style={styles.buttonWrapper}>
                <Text style={styles.textButton}>BELI</Text>
            </View>
            </TouchableOpacity>
        </View>
    );
};

export default ProductMac;

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#10ac84',
        marginLeft: 20,
        marginTop: 40,
    },

    wrapper: {
        padding: 12, 
        backgroundColor: '#F2F2F2', 
        width: 212, 
        borderRadius: 8,
    },

    imageProduct: {
        width: 188, height: 107, borderRadius: 8,
    },

    productName: {
        fontSize: 14, fontWeight: 'bold', marginTop: 16,
    },

    productPrice: {
        fontSize: 12, fontWeight: 'bold', marginTop: 12, color: '#F2994A',
    },

    productLocation: {
        fontSize: 12, fontWeight: '300', marginTop: 8,
    },

    buttonWrapper: {
        backgroundColor: '#6FCF97', paddingVertical: 6, borderRadius: 25, marginTop: 20,
    },

    textButton: {
        fontSize: 14, fontWeight: '600', color: 'white', textAlign: 'center',
    }

})
