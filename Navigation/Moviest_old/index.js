/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';

import { Provider } from 'react-redux'
import { createStore } from 'redux'

import {name as appName} from './app.json';
import 'react-native-gesture-handler';

import {ADD_FAVORITE, REMOVE_FAVORITE} from "./Action";

const initialState = {
    favorites: []
}

const reducer = (state = initialState, action) => {   
    if (action.type == ADD_FAVORITE) {
        const newFavorite = [...state.favorites, action.payload];
        let newState = {...state, favorites: newFavorite};
        console.log('ADD_FAVORITE - new state :', newState);
        return newState;
    } 
    else if ( action.type == REMOVE_FAVORITE ) {
        const newFavorite = state.favorites.filter( item => {
            return item.id != action.payload
        });
        let newState = { favorites: newFavorite };
        console.log('REMOVE_FAVORITE - snew state :', newState);
        return newState;
    }
    return state;
}

const store = createStore(reducer);

const RootApp = () => (
    <Provider store={store}>
        <App />
    </Provider>
)

AppRegistry.registerComponent(appName, () => RootApp);
