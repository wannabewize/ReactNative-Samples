/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import MovieListScreen from "./MovieListScreen";
import MovieDetailScreen from "./MovieDetailScreen";
import FavoriteScreen from "./FavoriteScreen";

const movies = require('./movies');

const MoviesStack = createStackNavigator();

const MoviesNavigator = () => (
    <MoviesStack.Navigator>
        <MoviesStack.Screen name='MovieList' component={MovieListScreen} initialParams={movies}/>
        <MoviesStack.Screen name='MovieDetail' component={MovieDetailScreen} />
    </MoviesStack.Navigator>
)

const Tab = createBottomTabNavigator();

const App = () => {
    let [favorite, setFavorite] = useState([]);
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name="Movies"
                    component={MoviesNavigator}
                />
                <Tab.Screen
                    name="Favorites"
                    component={FavoriteScreen}                    
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default App;
