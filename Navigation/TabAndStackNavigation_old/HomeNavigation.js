import React, {useEffect} from 'react';
import { SafeAreaView, View, Text, Button} from "react-native";
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const HomeScreen = () => {
    const navigation = useNavigation();

    useEffect( () => {
        const unsubscribe = navigation.addListener('focus', () => {
            console.log('Home Screen focus event fired!');
        });
        return unsubscribe;
    }, [navigation]);

    useEffect( () => {
        const unsubscribe = navigation.addListener('blur', () => {
            console.log('Home Screen blue event fired!');
        });
        return unsubscribe;
    }, [navigation])    

    return (
        <SafeAreaView style={{flex:1}}>
            <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                <Text>Home Screen</Text>
                <Button
                    onPress={() => { navigation.navigate('HomeDetailScreen') }}
                    title="디테일 보기"/>
            </View>
            
        </SafeAreaView>
    )
}

const HomeDetailScreen = () => {
    return (
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
            <Text>Home Detail</Text>
        </View>
    )
}

const HomeStack = createStackNavigator();
const HomeNavigation = () => (
    <HomeStack.Navigator>
        <HomeStack.Screen name='HomeScreen' component={HomeScreen} />
        <HomeStack.Screen name='HomeDetailScreen' component={HomeDetailScreen} />
    </HomeStack.Navigator>
)

export default HomeNavigation;