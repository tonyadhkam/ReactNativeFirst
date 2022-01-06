import React from 'react';
import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import tony from '../../assets/image/tony2.jpg';

const Item = () => {
    return (
        <View style={styles.itemContainer}>
            <Image source={tony} style={styles.avatar}/>
            <View style={styles.desc}>
                <Text style={styles.descName}>Nama Lengkap</Text>
                <Text style={styles.descEmail}>Email</Text>
                <Text style={styles.descBidang}>Bidang</Text>
            </View>
            <Text style={styles.delete}>X</Text>
        </View>
    )
}

const LocalAPI = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.textTittle}>Local API (JSON Server)</Text>
            <Text style={styles.margin}>Masukkan Data Anggota Kelas Coding</Text>
            <TextInput placeholder='Nama Lengkap' style={styles.input} />
            <TextInput placeholder='Email' style={styles.input} />
            <TextInput placeholder='Bidang' style={styles.input} />
            <Button title='Simpan'/>
            <View style={styles.line} />
            <Item />
            <Item />
            <Item />
        </View>
    );
};

export default LocalAPI;

const styles = StyleSheet.create({
    container : {padding: 20},
    margin : {marginTop: 22, marginBottom: 18},
    textTittle: {textAlign: 'center'},
    line: {height: 2, backgroundColor: 'black', marginVertical: 20},
    input: {borderWidth: 2, marginBottom: 12, borderRadius: 25, paddingHorizontal: 16 },
    avatar: {width: 80, height: 80, borderRadius: 80},
    itemContainer: {flexDirection: 'row', marginBottom: 12},
    desc: {marginLeft: 18, flex: 1},
    descName: {fontSize: 20, fontWeight: 'bold'},
    descEmail: {fontSize: 16},
    descBidang: {fontSize: 12, marginTop: 8},
    delete: {fontSize: 20, fontWeight: 'bold', color: 'red'}
})
