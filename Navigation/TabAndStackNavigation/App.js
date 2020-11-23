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

import HomeNavigation from "./HomeNavigation";
import SettingNavigation from "./SettingNavigation";

const Tab = createBottomTabNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name="HomeScreen"
                    component={HomeNavigation}
                    options={{
                        tabBarIcon: ({focused}) =>  {
                            return focused ?
                                <Ionicons name="film-outline" size={28} color="black"/>
                                : <Ionicons name="film-outline" size={28} color="gray"/>
                        }
                    }}
                />
                <Tab.Screen name="SettingScreen"
                    component={SettingNavigation}
                    options={{
                        tabBarIcon: ({focusd}) => {
                            return focusd ? <Ionicons name="cog-outline" size={28}  color="black"/>
                                : <Ionicons name="cog-outline" size={28} color="gray"/>
                        }
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default App;
