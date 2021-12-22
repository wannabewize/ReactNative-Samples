import React from 'react';
import { View, Text, FlatList, TouchableHighlight } from 'react-native';

const MovieCell = ({ movie }) => (
  <View
    style={{
      flexDirection: 'row',
      height: 48,
      marginVertical: 2, marginHorizontal: 4,
      backgroundColor: 'lightgrey'
    }}>
    <View style={{ justifyContent: 'center', marginLeft: 12, flex: 1 }}>
      <Text style={{ fontSize: 16 }}>{movie.title}</Text>
    </View>
    <View style={{ justifyContent: 'center', marginRight: 12 }}>
      <Text style={{ fontSize: 12 }}>{movie.genre}</Text>
    </View>
  </View>
)

const MovieListScreen = ({ navigation, route }) => {
  const movies = route.params.movies;
  const showMovieDetail = (movie) => {
    console.log('showMovieDetail :', movie);
    navigation.navigate('MovieDetail', { movie });
  }

  return (
    <FlatList
      data={movies}
      keyExtractor={(item) => `movie=${item.id}`}
      renderItem={({ item }) => (
        <TouchableHighlight
          onPress={() => { showMovieDetail(item) }}
        >
          <MovieCell movie={item} />
        </TouchableHighlight>
      )}
    />
  )

}
export default MovieListScreen;