/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { configureStore, createReducer } from '@reduxjs/toolkit';

const initialFavoriteState = [];

const favoriteReducer = createReducer(initialFavoriteState, builder => {
  builder.addCase('AddFavorite', (state, action) => {
    state.append(action.data);
  }),
  builder.addCase('RemoveFavorite', (state, action) => {
    state = state.filter( item => item.id != action.data.id )
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

