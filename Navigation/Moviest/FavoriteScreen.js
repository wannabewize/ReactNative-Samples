import React, { useEffect } from 'react';
import { SafeAreaView, View, FlatList, Text } from 'react-native';
import { useSelector } from 'react-redux';

const FavoriteCell = ({ item }) => (
  <View style={{ height: 44, justifyContent: 'center', paddingHorizontal: 24, borderWidth: 0.5, borderColor: 'gray' }}>
    <Text>{item.title}</Text>
  </View>
)

const FavoriteScreen = () => {
  // store에서 즐겨찾기를 한 영화 목록 얻기/변경 감시
  const favorites = useSelector((state) => { return state.favorites });

  useEffect(() => {
    console.log('use effect works :', favorites);
  }, [favorites]);

  return (
    <SafeAreaView>
      <View style={{ height: 50, marginHorizontal: 0, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 16, fontWeight: '600' }}>Favorites</Text>
      </View>
      <FlatList
        data={favorites}
        keyExtractor={(item) => { return `movie${item.id}` }}
        renderItem={({ item }) => (
          <FavoriteCell item={item} />
        )}
      />
    </SafeAreaView>
  )
}

export default FavoriteScreen;