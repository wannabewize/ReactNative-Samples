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
    Button,
    Image,
    ScrollView,
    TextInput,
    View,
    Text,
    StatusBar,
} from 'react-native';


const App = () => {
    title = '위처'
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    style={styles.scrollView}>

                        <View style={{
                            marginLeft: 20, marginRight: 20,
                            marginTop: 50, marginBottom: 50,
                            flexDirection: 'row'
                        }}>
                            <Text style={{fontSize: 20}}>제목</Text>
                            <Text style={{fontSize: 20, marginLeft: 20}}>{title}</Text>
                        </View>

                        <Image 
                            style={{width: 300, height: 400}}
                            source={require('./images/thewitcher.jpg')}
                        />
                </ScrollView>
            </SafeAreaView>
        </>
    );
};

export default App;
