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

const App = () => {
    let [accelemeterSubscription, setAccelemeterSubscription] = useState(null);
    let [sensorResult, setSensorResult] = useState(null);
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
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <Button
                    title="가속도 측정"
                    onPress={sensorAccelerometer}
                />
                <Text>{sensorResult}</Text>
            </SafeAreaView>
        </>
    );
};


export default App;
