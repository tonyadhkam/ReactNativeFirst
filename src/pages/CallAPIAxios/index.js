import axios, { Axios } from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';

const CallAPIAxios = () => {
    const [dataUser, setDataUser] = useState({
        avatar: '',
        email: '',
        first_name: '',
        last_name: ''
    })

    const [dataJob, setDataJob] = useState({
        name: '',
        job: ''
    })
    useEffect(() => {
        //call API dengan method GET
        // fetch('https://reqres.in/api/users/2')
        // .then(response => response.json())
        // .then(json => console.log(json))

        //call API dengan method POST
        // const dataForAPI = {
        //     "name": "morpheus",
        //     "job": "leader"
        // }

        // console.log('data object: ', dataForAPI);
        // console.log('data stringify: ', JSON.stringify(dataForAPI));

        // fetch('https://reqres.in/api/users', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(dataForAPI)
        // })
        // .then(response => response.json())
        // .then(json => {
        //     console.log('post response: ', json)
        // })
    }, []);

    const getData = () => {
        axios.get('https://reqres.in/api/users/3')
        .then (result => {
            setDataUser(result.data.data);
        })
        .catch(err => console.log('err: ', err));
    }

    const postData = () => {
        const dataForAPI = {
            "name": "morpheus",
           "job": "leader"
        }

        // fetch('https://reqres.in/api/users', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(dataForAPI)
        // })
        // .then(response => response.json())
        // .then(json => {
        //     console.log('post response: ', json)
        //     setDataJob(json)
        // })

        axios.post('https://reqres.in/api/users', dataForAPI)
        .then (result => {
            setDataJob(result.data);
        })
        .catch(err => console.log('err: ', err));

    }

    return (
        <View style={styles.container}>
            <Text style={styles.textTittle}>Call API dengan Axios</Text>
            <Button title='GET DATA' onPress={getData}/>
            <Text>RESPONSE GET DATA</Text>
            {dataUser.avatar.length > 0 && (
                <Image source={{uri: dataUser.avatar}} style={styles.avatar}/>
            )}
            <Text>{` ${dataUser.first_name} ${dataUser.last_name} `}</Text>
            <Text>{dataUser.email}</Text>
            <View style={styles.line} />
            <Button title='POST DATA' onPress={postData}/>
            <Text>RESPONSE POST DATA</Text>
            <Text>{dataJob.name}</Text>
            <Text>{dataJob.job}</Text>
        </View>
    );
};

export default CallAPIAxios;

const styles = StyleSheet.create({
    container : {padding: 20},
    textTittle: {textAlign: 'center'},
    line: {height: 2, backgroundColor: 'black', marginVertical: 20},
    avatar: {width: 100, height: 100, borderRadius: 100}
});
