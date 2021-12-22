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
import { ActorNavigation } from './ActorNavi';
import Icon from 'react-native-vector-icons/MaterialIcons';


const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen
          name="MovieScreen"
          component={MovieNavigation}
          options={{
            tabBarIcon: ({ focused }) => {
              return focused
                ? <Icon name="movie-filter" size={32} />
                : <Icon name="theaters" size={32} />;
            }
          }} />
        <Tab.Screen
          name="ActorScreen"
          component={ActorNavigation}
          options={{
            tabBarIcon: ({focused}) => (
              focused ? <Icon name="emoji-people" size={32}/> : <Icon name="person" size={32}/>)
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};


export default App;
