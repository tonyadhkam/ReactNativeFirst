import axios from 'axios';
import React, { useEffect } from 'react';
import { Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useState } from 'react/cjs/react.development';
import tony from '../../assets/image/tony2.jpg';

const Item = ({name, email, bidang, onPress}) => {
    return (
        <View style={styles.itemContainer}>
            <TouchableOpacity onPress={onPress}>
                <Image source={tony} style={styles.avatar}/>
            </TouchableOpacity>
            <View style={styles.desc}>
                <Text style={styles.descName}>{name}</Text>
                <Text style={styles.descEmail}>{email}</Text>
                <Text style={styles.descBidang}>{bidang}</Text>
            </View>
            <Text style={styles.delete}>X</Text>
        </View>
    )
}

const LocalAPI = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [bidang, setBidang] = useState("");
    const [users, setUsers] = useState([]);
    const [button, setButton] = useState("Simpan");
    const [selectedUser, setSelectedUser] = useState({})

    useEffect(() => {
        getData();
    }, []);

    const submit = () => {
        const data = {
            name,
            email,
            bidang,
        }
        if(button === 'Simpan') {
            axios.post('http://10.0.2.2:3004/users', data)
            .then(res => {
                console.log('res: ', res);
                setName("");
                setEmail("");
                setBidang("");
                getData();
            })
        }
        else {
            axios.put(`http://10.0.2.2:3004/users/${selectedUser.id}`, data)
            .then(res => {
                console.log('res update: ', res);
                setName("");
                setEmail("");
                setBidang("");
                getData();
                setButton("Simpan");
            })
        }
    }

    const getData = () => {
        axios.get('http://10.0.2.2:3004/users')
        .then(res => {
            console.log('res get data: ', res)
            setUsers(res.data);
        })
    }

    const selectItem = (item) => {
        console.log('selected item: ', item);
        setSelectedUser(item);
        setName(item.name);
        setEmail(item.email);
        setBidang(item.bidang);
        setButton("Update");
    }

    return (
        <View style={styles.container}>
            <Text style={styles.textTittle}>Local API (JSON Server)</Text>
            <Text style={styles.margin}>Masukkan Data Anggota Kelas Coding</Text>
            <TextInput placeholder='Nama Lengkap' style={styles.input} value={name} onChangeText={(value) => setName(value)}/>
            <TextInput placeholder='Email' style={styles.input} value={email} onChangeText={(value) => setEmail(value)}/>
            <TextInput placeholder='Bidang' style={styles.input} value={bidang} onChangeText={(value) => setBidang(value)}/>
            <Button title={button} onPress={submit}/>
            <View style={styles.line} />
            {users.map(user => {
                return <Item name={user.name} email={user.email} bidang={user.bidang} onPress={() => selectItem(user)} />
            })}
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
