/**
 * @format
 */

import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

import { Provider } from 'react-redux'
import { configureStore, createReducer } from '@reduxjs/toolkit';

// 초기 즐겨찾기 데이터
const initialFavoriteState = [];

const favoriteReducer = createReducer(initialFavoriteState, builder => {
  builder.addCase('AddFavorite', (state, action) => {
    state.push(action.data);
    console.log('state : ', state);
  })
  builder.addCase('RemoveFavorite', (state, action) => {
    console.log('state : ', state);
    return state.filter(item => item.id != action.data.id);
  })
});

const store = configureStore({
  reducer: {
    favorites: favoriteReducer
  }
});

const RootApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

AppRegistry.registerComponent(appName, () => RootApp);

