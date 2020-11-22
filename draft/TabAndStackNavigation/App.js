/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Button,
} from 'react-native';

import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
// % yarn add react-native-vector-icons 
import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeScreen = () => {
    const navigation = useNavigation();

    useEffect( () => {
        console.log('Home Screen Appear!'); // Not Working
    }, [navigation]);

    useEffect( () => {
        const unsubscribe = navigation.addListener('focus', () => {
            console.log('Home Screen focus event fired!');
        });
        return unsubscribe();
    }, [navigation]);

    useEffect( () => {
        const unsubscribe = navigation.addListener('blur', () => {
            console.log('Home Screen blue event fired!');
        });
        return unsubscribe;
    }, [navigation])    

    return (
        <SafeAreaView style={{flex:1}}>
            <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                <Text>Home Screen</Text>
                <Button onPress={() => {navigation.navigate('SettingScreen')}} title='설정 보기' />
            </View>
            
        </SafeAreaView>
    )
}

const HomeDetailScreen = () => {
    return (
        <View><Text>Home Detail</Text></View>
    )
}

const SettingsScreen = () => {
    return (
        <SafeAreaView style={{flex:1}}>
            <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                <Text>Setting Screen</Text>
            </View>
        </SafeAreaView>
    )
}

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


const App = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                tabBarOptions={{
                    activeTintColor: 'red'
                }}
            >
                <Tab.Screen
                    name="HomeScreen"
                    component={
                        <Stack.Navigator>
                            <Stack.Screen name='HomeScreen' component={HomeScreen} />
                            <Stack.Screen name='HomeDetailScreen' component={HomeDetailScreen} />
                        </Stack.Navigator>}
                    options={{
                        tabBarIcon: ({focused}) =>  {
                            return focused ?
                                <Ionicons name="film-outline" size={28} color="red"/>
                                : <Ionicons name="film-outline" size={28} color="gray"/>
                        }
                    }}
                />
                <Tab.Screen name="SettingScreen"
                    component={SettingsScreen}
                    options={{
                        tabBarIcon: ({focusd}) => {
                            return focusd ? <Ionicons name="cog-outline" size={28}  color="red"/>
                                : <Ionicons name="cog-outline" size={28} color="gray"/>
                        }
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default App;
