import React, { Component, useEffect, useState } from "react";
import photos from '../../assets/image/tony2.jpg';
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

// class FlexBox extends Component {
//     constructor(props){
//         super(props);
//         console.log('==> constructor');
//         this.state = {
//             subscriber : 200,
//         };
//     }

//     componentDidMount(){
//         console.log('==> component did mount');
//         setTimeout(() => {
//             this.setState({
//                 subscriber: 900,
//             });
//         }, 3000);
        
//     }

//     componentDidUpdate(){
//         console.log('==> component did update');
//     }

//     componentWillUnmount(){
//         console.log('==> component will unmount');
//     }

//     render(){
//         console.log('==> render')
//         return (
//             <View>
//                 <View style={{
//                     flexDirection: 'row', 
//                     backgroundColor: '#c8d6e5', 
//                     alignItems: 'center',
//                     justifyContent: 'space-between'
//                     }}>
//                     <View style={{backgroundColor: '#ee5253', width: 50, height: 50}}></View>
//                     <View style={{backgroundColor: '#feca57', width: 50, height: 50}}></View>
//                     <View style={{backgroundColor: '#1dd1a1', width: 50, height: 50}}></View>
//                     <View style={{backgroundColor: '#5f27cd', width: 50, height: 50}}></View>
//                 </View>
//                 <View style={{flexDirection: 'row', justifyContent:'space-around'}}>
//                     <Text>Beranda</Text>
//                     <Text>Video</Text>
//                     <Text>Playlist</Text>
//                     <Text>Komunitas</Text>
//                     <Text>Channel</Text>
//                     <Text>Tentang</Text>
//                 </View>
//                 <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20, marginLeft: 6}}>
//                     <Image
//                         source={photos}
//                         style={{width: 100, height: 100, borderRadius: 50, marginRight: 12}}
//                     />
//                     <View>
//                         <Text style={{fontSize: 20, fontWeight: 'bold'}}>Tony Andhika Mahendra</Text>
//                         <Text>{this.state.subscriber} ribu subscriber</Text>
//                     </View>
//                 </View>
//             </View>
//         );
//     }
// }

const FlexBox = () => {
    const [subscriber, setSubscriber] = useState(200);

    useEffect(() => {
        console.log('==> did mount');
        setTimeout(() => {
            setSubscriber(500);
        }, 3000);
        return () =>{
            console.log('==> did update');
        }
    }, [subscriber]);

    // useEffect(() => {
    //     console.log('==> did update');
    //     setTimeout(() => {
    //         setSubscriber(500);
    //     }, 3000);
    // }, [subscriber]);

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
                        <Text>{subscriber} ribu subscriber</Text>
                    </View>
                </View>
            </View>
    );
}

export default FlexBox;