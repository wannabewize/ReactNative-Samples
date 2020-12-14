/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button,
    PermissionStatus,
    PermissionsAndroid,
    Platform,
} from 'react-native';
import {
    accelerometer,
    gyroscope,
    setUpdateIntervalForType,
    SensorTypes
  } from "react-native-sensors";
import Geolocation from '@react-native-community/geolocation';

const App = () => {
    let [accelemeterSubscription, setAccelemeterSubscription] = useState(null);
    let [sensorResult, setSensorResult] = useState(null);
    let [locationWatcher, setLocationWatcher] = useState(null);

    const sensorAccelerometer = () => {
        if ( accelemeterSubscription ) {
            accelemeterSubscription.unsubscribe();
            setAccelemeterSubscription(null);
        }
        else {
            const subscription = accelerometer.subscribe( ({x, y, z, timestamp}) => {
                setSensorResult(`x: ${x}, y: ${y}, z: ${z}`);            
            });
            setAccelemeterSubscription(subscription);
        }
    }
    
    const showCurrentLocation = () => {
        Geolocation.getCurrentPosition(position => {
            const info = JSON.stringify(position);
            setSensorResult(info);            
        });        
    }

    const whereAmI = () => {
        setSensorResult(null);
        if ( Platform.OS == 'android' ) {
            PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                { title: '위치 정보 접근 요청', message: '위치 정보가 필요합니다.', buttonPositive: '승인', buttonNegative: '기각'}
            ).then( status => {
                switch ( status ) {
                    case PermissionsAndroid.RESULTS.GRANTED:
                        showCurrentPosition();
                        return;
                    case PermissionsAndroid.RESULTS.DENIED:
                        alert('위치 정보 접근 불가');
                        return;
                    case PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN:
                        console.log('never ask agin');
                        return;
                }
            }).catch ( err => {
                console.error(err);
            });
        } else {
            showCurrentLocation();
        }
    }

    const trackCurrentLocation = () => {
        if ( locationWatcher ) {
            console.log('gps 센서 중지');
            Geolocation.clearWatch(locationWatcher);
            setLocationWatcher(null);
        }
        else {
            console.log('gps 센서 시작');
            const watcherId = Geolocation.watchPosition(position => {
                const lastPosition = JSON.stringify(position);
                setSensorResult(lastPosition);
            });
            setLocationWatcher(watcherId);
        }
    }
    


    const whereAmI2 = () => {
        setSensorResult(null);        
        if ( Platform.OS == 'android' ) {
            PermissionsAndroid.request( PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION )
            .then(status => {
                switch ( status ) {
                    case PermissionsAndroid.RESULTS.GRANTED:
                        trackCurrentLocation();
                        return;
                    case PermissionsAndroid.RESULTS.DENIED:
                        alert('위치 정보 접근 불가');
                        return;
                    case PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN:
                        console.log('NEVER_ASK_AGAIN');
                        return;
                }
            }).catch ( err => {
                console.error(err);
            });
        }
        else {
            trackCurrentLocation();
        }
    }
    
    const buttonStyle = {}
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <Button
                    style={{marginBottom: 10}}
                    title="가속도 측정"
                    onPress={sensorAccelerometer}
                />
                <Button                                        
                    title="위치 측정(한번)"
                    onPress={whereAmI}
                />
                <Button
                    title="위치 측정(계속)"
                    onPress={whereAmI2}
                />
                <Text style={{margin: 20}}>{sensorResult}</Text>
            </SafeAreaView>
        </>
    );
};


export default App;
