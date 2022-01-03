import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Cart from '../../component/Cart';
import ProductMac from '../../component/Product';

const Communication = () => {
    
    const [totalProduct, setTotalProduct] = useState(0)
    return (
        <View style={styles.container}>
            <Text style={styles.textTittle}>Materi Communication</Text>
            <Cart quantity={totalProduct}/>
            <ProductMac onButtonPress={() => setTotalProduct(totalProduct + 1)} />
        </View>
    )
}

export default Communication;

const styles = StyleSheet.create({
    container : {padding: 20},
    textTittle: {textAlign: 'center'},
});
