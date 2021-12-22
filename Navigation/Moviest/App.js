/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialIcons';

import MovieListScreen from "./MovieListScreen";
import MovieDetailScreen from "./MovieDetailScreen";
import FavoriteScreen from "./FavoriteScreen";

const movies = require('./movieData');

const Tab = createBottomTabNavigator();
const MoviesStack = createNativeStackNavigator();

const MoviesNavigator = () => (
  <MoviesStack.Navigator>
    <MoviesStack.Screen name='MovieList' component={MovieListScreen} initialParams={movies} />
    <MoviesStack.Screen name='MovieDetail' component={MovieDetailScreen} />
  </MoviesStack.Navigator>
)

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Movies"
          component={MoviesNavigator}
          options={{
            tabBarIcon: ({ focused }) => <Icon name="movie" size={32} />
          }}
        />
        <Tab.Screen name="Favorites"
          component={FavoriteScreen}
          options={{
            tabBarIcon: ({ focused }) => <Icon name="favorite" size={32} />
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};


export default App;
