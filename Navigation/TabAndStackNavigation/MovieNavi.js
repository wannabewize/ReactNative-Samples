import React from 'react';
import {
  Button,
  SafeAreaView,
  Text,
} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const MovieStack = createNativeStackNavigator();

export const MovieNavigation = () => {
  return (
    <MovieStack.Navigator>
      <MovieStack.Screen name="MovieList" component={MovieListScreen} />
      <MovieStack.Screen name="MovieDetail" component={MovieDetailScreen} />
    </MovieStack.Navigator>
  )
};

const MovieListScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text style={{ fontSize: 24, alignSelf: 'center', marginVertical: 24 }}>MovieList</Text>
      <Button onPress={() => navigation.navigate('MovieDetail')} title="Detail" />
    </SafeAreaView>
  )
};

const MovieDetailScreen = () => {
  return (
    <SafeAreaView>
      <Text style={{ fontSize: 24, alignSelf: 'center', marginVertical: 24 }}>MovieDetail</Text>
    </SafeAreaView>
  )
};