/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Button,
    StatusBar,
} from 'react-native';
import Sound from 'react-native-sound';

const App = () => {
    playEffectSound = () => {
        const sound = new Sound('elevator.mp3', Sound.MAIN_BUNDLE, (err) => {
            if (err) {
                console.error(err);
                return;
            }
            sound.play( success => {
                console.log('Sound plays success');
            })
        })
    }
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <Button
                    onPress={playEffectSound}
                    title="효과음 재생"
                />
            </SafeAreaView>
        </>
    );
};

export default App;
