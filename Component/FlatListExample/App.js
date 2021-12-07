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
  StatusBar,
  FlatList,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import { movies } from './MovieData';

const BasicList = () => (
  <FlatList
    data={["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"]}
    keyExtractor={(item, index) => item}
    renderItem={({ item, index }) => (
      <View style={{
        key: item,
        height: 100, margin: 6,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'lightgray',
      }}>
        <Text>{item}</Text>
      </View>
    )}
  />
);

const HorizontalList = () => (
  <FlatList
    horizontal={true}
    data={["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"]}
    keyExtractor={(item, index) => item}
    renderItem={({ item, index }) => (
      <View style={{
        width: 100, height: 100, margin: 6,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'lightgray',
      }}>
        <Text>{item}</Text>
      </View>
    )}
  />
);

const HeaderFooterList = () => (
  <FlatList
    data={["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"]}
    numColumns={3}
    keyExtractor={(item, index) => item}
    renderItem={({ item, index }) => (
      <View style={{
        width: 100, height: 100, margin: 6,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'lightgray',
      }}>
        <Text>{item}</Text>
      </View>
    )}
    ListHeaderComponent={<Text>List Header</Text>}
    ListHeaderComponentStyle={{
      height: 40,
      backgroundColor: 'lightblue',
      justifyContent: 'center', alignItems: 'center'
    }}
    ListFooterComponent={<ListFooter />}
  />
);

const ListFooter = () => (
  <View style={{
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgreen'
  }}>
    <Text>List Footer</Text>
  </View>
);

const TouchableList = () => {
  let [selected, setSelected] = useState(-1);
  return (
    <FlatList
      data={["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"]}
      keyExtractor={(item, index) => item}
      renderItem={({ item, index }) => (
        <TouchableOpacity
          onPress={() => { setSelected(index) }}
        >
          <View style={{
            key: index,
            height: 100, margin: 6,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: selected == index ? 'gray' : 'lightgray',
          }}>
            <Text
              style={{
                color: selected == index ? 'white' : 'black',
                fontSize: selected == index ? 32 : 16
              }}
            >{item}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  )
}

const MovieList = () => (
  <FlatList
    data={movies}
    keyExtractor={(item) => `${item.id}`}
    renderItem={({ item, index }) => (
      <MovieCell movie={item} />
    )}
  />
);

const MovieCell = ({ movie }) => (
  <View style={{ height: 80, flexDirection: 'row', marginVertical: 4 }}>
    <Image
      style={{ width: 80, height: 80, resizeMode: 'cover' }}
      source={movie.image} />
    <View
      style={{ flexDirection: 'column', marginLeft: 12, justifyContent: 'center' }}
    >
      <Text style={{ fontSize: 18, marginBottom: 8 }}>{movie.title} </Text>
      <Text>{movie.stars} </Text>
    </View>

  </View>
);


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      {/* <BasicList /> */}
      {/* <HorizontalList /> */}
      {/* <HeaderFooterList /> */}
      {/* <TouchableList /> */}
      <MovieList />
    </SafeAreaView>
  );
};


export default App;
