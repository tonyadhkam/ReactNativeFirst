import axios from 'axios';
import React from 'react';
import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react/cjs/react.development';
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
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [bidang, setBidang] = useState("");

    const submit = () => {
        const data = {
            name,
            email,
            bidang,
        }
        console.log('data before dens: ', data);
        axios.post('http://10.0.2.2:3004/users', data)
        .then(res => {
            console.log('res: ', res);
            setName("");
            setEmail("");
            setBidang("");
        })
    }
    return (
        <View style={styles.container}>
            <Text style={styles.textTittle}>Local API (JSON Server)</Text>
            <Text style={styles.margin}>Masukkan Data Anggota Kelas Coding</Text>
            <TextInput placeholder='Nama Lengkap' style={styles.input} value={name} onChangeText={(value) => setName(value)}/>
            <TextInput placeholder='Email' style={styles.input} value={email} onChangeText={(value) => setEmail(value)}/>
            <TextInput placeholder='Bidang' style={styles.input} value={bidang} onChangeText={(value) => setBidang(value)}/>
            <Button title='Simpan' onPress={submit}/>
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
