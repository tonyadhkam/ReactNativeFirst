import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const CallAPIVanila = () => {
    useEffect(() => {
        //call API dengan method GET
        // fetch('https://reqres.in/api/users/2')
        // .then(response => response.json())
        // .then(json => console.log(json))

        //call API dengan method POST
        const dataForAPI = {
            "name": "morpheus",
            "job": "leader"
        }

        console.log('data object: ', dataForAPI);
        console.log('data stringify: ', JSON.stringify(dataForAPI));

        fetch('https://reqres.in/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataForAPI)
        })
        .then(response => response.json())
        .then(json => {
            console.log('post response: ', json)
        })
    }, []);
    return (
        <View style={styles.container}>
            <Text style={styles.textTittle}>Call API dengan VanilaJS</Text>
        </View>
    );
};

export default CallAPIVanila;

const styles = StyleSheet.create({
    container : {padding: 20},
    textTittle: {textAlign: 'center'},
});
