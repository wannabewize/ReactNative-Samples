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

    sensorAccelerometer = () => {
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

    whereAmI = () => {
        Geolocation.getCurrentPosition(position => {
            const info = JSON.stringify(position);
            setSensorResult(info);            
        });
    }

    whereAmI2 = () => {
        if ( locationWatcher ) {
            Geolocation.clearWatch(locationWatcher);
            setLocationWatcher(null);
        }
        else {
            const watcherId = Geolocation.watchPosition(position => {
                const lastPosition = JSON.stringify(position);
                setSensorResult(lastPosition);
            });
            setLocationWatcher(watcherId);
        }
    }    
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <Button
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
                <Text>{sensorResult}</Text>
            </SafeAreaView>
        </>
    );
};


export default App;
