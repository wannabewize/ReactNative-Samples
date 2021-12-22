import React, { useEffect } from 'react';
import { SafeAreaView, View, FlatList, Text } from 'react-native';

const FavoriteCell = ({ item }) => (
  <View>
    <Text>{item.id} - {item.title}</Text>
  </View>
)

const FavoriteScreen = () => {
  const favorites = [
    { id: 1, title: 'favorite1' }
  ];

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