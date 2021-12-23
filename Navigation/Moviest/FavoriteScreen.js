import React, { useEffect } from 'react';
import { SafeAreaView, View, FlatList, Text } from 'react-native';
import { useSelector } from 'react-redux';

const FavoriteCell = ({ item }) => (
  <View>
    <Text>{item.id} - {item.title}</Text>
  </View>
)

const FavoriteScreen = () => {
  const favorites = useSelector( (state) => { return state.favorites });

  useEffect(() => {
    console.log('use effect works :', favorites);
  }, [favorites]);

  return (
    <SafeAreaView>
      <Text>Favorites</Text>
      <FlatList
        data={favorites}
        keyExtractor={(item) => { return `movie${item.id}` }}
        renderItem={({ item }) => (<FavoriteCell item={item} />)}
      />
    </SafeAreaView>
  )
}

export default FavoriteScreen;