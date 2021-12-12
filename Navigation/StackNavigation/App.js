/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  Button,
  TextInput,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function HomeScreen({ navigation }) {
  let [text, setText] = useState('');
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{fontSize: 20}}>Home Screen</Text>
      <TextInput
        style={{ borderWidth: 1, borderColor: 'gray', width: '80%', height: 26, marginVertical: 12 }}
        onChangeText={text => { setText(text) }}
      />
      <Button
        onPress={() => { navigation.navigate('Detail', { value: text }) }}
        title="디테일 보기 - 1" />
      <Button
        onPress={() => { navigation.navigate('Detail2', { value: text }) }}
        title="디테일 보기 - 2" />
    </View>
  );
}

const DetailScreen = ({ route, navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 20 }}>Detail Screen</Text>
      <Text style={{ fontSize: 16, marginVertical: 8 }}>Value from Home : {route.params.value}</Text>
      <Button
        onPress={() => { navigation.goBack() }}
        title="뒤로 이동" />
    </View>
  )
}

class DetailScreen2 extends React.Component {
  componentDidMount() {
    console.log('Detail Screen2 appear');
  }

  componentWillUnmount() {
    console.log('Detail Screen2 disappear');
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 20 }}>Detail Screen2</Text>
        <Text style={{ fontSize: 16, marginVertical: 8 }}>Value from Home : {this.props.route.params.value}</Text>
        <Button
          onPress={() => { this.props.navigation.goBack() }}
          title="뒤로 이동" />
      </View>
    )
  }
}


const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail"
          component={DetailScreen}
          options={{
            headerRight: (props) => (
              <Button
                onPress={() => { console.log('reload!') }}
                title="Reload" />
            )
          }} />
        <Stack.Screen name="Detail2" component={DetailScreen2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
