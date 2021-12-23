import React, { useEffect, useState } from 'react';
import { ScrollView, Button, Text, Image } from 'react-native';
import {useSelector, useDispatch} from "react-redux";


const style = { height: 30, fontSize: 16, marginVertical: 4 };

const MovieDetailScreen = ({ navigation, route }) => {
  const dispatch = useDispatch();
  let [isFavorite, setFavorite] = useState(false);
  const favorites = useSelector(state => state.favorites);
  const { movie } = route.params;

  useEffect(() => {
    console.log('favorite chaged :', favorites);
    // 즐겨찾기 목록 중 현재 영화의 포함 여부를 검사
    if (favorites.length > 0) {
      let filtered = favorites.filter(item => {
        return item.id == movie.id
      });
      setFavorite(filtered.length > 0);
    }
    else {
      setFavorite(false);
    }
  }, [favorites, movie]);

  // 스크린의 내비게이션 바에 버튼 추가하기
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={toggleFavorite} title={isFavorite ? "즐겨찾기 제거" : "즐겨찾기 추가"} />
      )
    })
  }, [navigation, isFavorite]);

  // 즐겨찾기 추가/제거
  function toggleFavorite() {
    console.log('toggle favorite :', movie);
    setFavorite(!isFavorite);

    if (isFavorite) {
      console.log('remove favorite');
      dispatch({ type: 'RemoveFavorite', data: movie });
    }
    else {
      console.log('add favorite');
      dispatch({ type: 'AddFavorite', data: movie });
    }
  }

  return (
    <ScrollView style={{ padding: 12 }}>
      <Image
        style={{ height: 200, alignSelf: 'center', marginBottom: 12 }}
        resizeMode='contain'
        source={movie.image} />

      <Text style={style}>제목 : {movie.title}</Text>
      <Text style={style}>장르 : {movie.genre}</Text>
      <Text style={style}>출연 : {movie.stars}</Text>
      <Text style={style}>방연연도 : {movie.year}</Text>
    </ScrollView>
  )
}

export default MovieDetailScreen;