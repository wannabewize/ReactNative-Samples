import React from 'react';
import {
  Button,
  SafeAreaView,
  Text,
} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const ActorStack = createNativeStackNavigator();

const ActorListScreen = ({navigation}) => {  
  return (
    <SafeAreaView  style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{fontSize:24, marginVertical: 24}}>ActorList</Text>
      <Button title="Detail" onPress={() => {navigation.navigate('ActorDetail')}} />
    </SafeAreaView>
  )
}

const ActorDetailScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{fontSize:24, marginVertical: 24}}>ActorDetail</Text>
    </SafeAreaView>
  )
}

export const ActorNavigation = () => {
  return (
    <ActorStack.Navigator>
      <ActorStack.Screen name="ActorList" component={ActorListScreen} />
      <ActorStack.Screen name="ActorDetail" component={ActorDetailScreen} />
    </ActorStack.Navigator>
  )
};
