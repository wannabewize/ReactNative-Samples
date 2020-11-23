import React, {useEffect} from 'react';
import { SafeAreaView, View, Text, Button} from "react-native";
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const SettingStack = createStackNavigator();

const SettingsScreen = () => {
    const navigation = useNavigation();    
    return (
        <SafeAreaView style={{flex:1}}>
            <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                <Text>Setting Screen</Text>
                <Button
                    onPress={() => { navigation.navigate('ProfileScreen') }}
                    title="프로필 보기/수정"/>                
            </View>
        </SafeAreaView>
    )
}

const ProfileScreen = () => {
    return (
        <SafeAreaView style={{flex:1}}>
            <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                <Text>Profile Screen</Text>
            </View>
        </SafeAreaView>
    )
}

const SettingNavigation = () => (
    <SettingStack.Navigator>
        <SettingStack.Screen name='SettingScreen' component={SettingsScreen} />
        <SettingStack.Screen name='ProfileScreen' component={ProfileScreen} />
    </SettingStack.Navigator>
)

export default SettingNavigation;