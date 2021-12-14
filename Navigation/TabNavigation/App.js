/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import {
  Text,
  Image,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function MovieScreen({ navigation }) {
  useEffect(() => {
    navigation.addListener('focus', () => {
      console.log('Movie Screen appear');
    });
    navigation.addListener('blur', () => {
      console.log('Movie Screen disappear');
    });
  }, []);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Movie!</Text>
    </View>
  );
}

function ActorScreen() {
  // navigation은 useNavigation으로 얻을 수도 있다.
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      console.log('Actor Screen appear');
    });
    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      console.log('Actor Screen disappear');
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Actor!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
      // screenOptions={({ route }) => ({
      //   tabBarIcon: ({ focused, color, size }) => {
      //     console.log('tabBarIcon. route :', route);
      //     if (route.name === 'Movie')
      //       return (<Image source={require('./images/movie.png')} />)
      //     else
      //       return (<Image source={require('./images/actor.png')} />);
      //   }
      // })}
      >
        <Tab.Screen name="Movie" component={MovieScreen}
          options={{
            tabBarIcon: ({ focused }) => (<Image source={require('./images/movie.png')} />)
          }}
        />
        <Tab.Screen name="Actor" component={ActorScreen}
          options={{
            tabBarIcon: ({ focused }) => (<Image source={require('./images/actor.png')} />)
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
