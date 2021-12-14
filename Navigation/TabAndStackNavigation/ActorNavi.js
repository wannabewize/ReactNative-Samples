import React from 'react';
import {
  Button,
  SafeAreaView,
  Text,
} from 'react-native';
import { createNativeStackNavigator, useNavigation } from '@react-navigation/native-stack';


const ActorStack = createNativeStackNavigator();

const ActorListScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <Text style={{fontSize:24, alignSelf: 'center', marginVertical: 24}}>ActorList</Text>
      <Button title="Detail" onPress={() => {navigation.navigate('ActorDetail')}} />
    </SafeAreaView>
  )
}

const ActorDetailScreen = () => {
  return (
    <Text>ActorDetail</Text>
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
