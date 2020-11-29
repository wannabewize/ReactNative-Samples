import React, {useEffect} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import {useSelector, useDispatch} from "react-redux";

const FavoriteCell = ({item}) => (
    <View>
        <Text>{item.id} - {item.title}</Text>
    </View>
)

const FavoriteScreen = () => {
    const favorites = useSelector( (state) => {return state.favorites});

    useEffect(() => {
        console.log('use effect :', favorites);
    }, [favorites]);
    return (
        <SafeAreaView>
            <Text>Favorites</Text>
            <FlatList
                data={favorites}
                keyExtractor={(item) => { return `movie${item.id}`}}
                renderItem={({item}) => ( <FavoriteCell item={item} />)}
            />
        </SafeAreaView>
    )
}

export default FavoriteScreen;