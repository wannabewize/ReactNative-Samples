/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MovieNavigation } from './MovieNavi';
import { ActorNavigation} from './ActorNavi';



const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen
          name="MovieScreen"          
          component={MovieNavigation} />
        <Tab.Screen
          name="ActorScreen"
          component={ActorNavigation}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};


export default App;
