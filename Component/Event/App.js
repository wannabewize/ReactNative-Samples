/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
  StyleSheet,
  Text,
  Platform,
  View,
  Pressable,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';


const App: () => Node = () => {
  const handlePress = (e) => {
    console.log('handle press');
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <KeyboardAvoidingView
        keyboardVerticalOffset={30}
        behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <ScrollView contentInsetAdjustmentBehavior="automatic"
        scrollEventThrottle={1}
        onScroll={(e) => console.log('ScrollView.onScroll y :', e.nativeEvent.contentOffset.y)}
        onScrollEndDrag={() => console.log('Scroll.onScrolleEndDrag')}
        onScrollBeginDrag={() => console.log('Scroll.onScrollBeginDrag')}>
        <Text style={styles.head}>터치/클릭 이벤트</Text>
        <Button title="버튼" onPress={handlePress} />
        <TouchableHighlight
          style={styles.basicMargin}
          activeOpacity={0.1}
          underlayColor="#DDDDDD"
          onPress={handlePress}>
            <Text>TouchableHighlight</Text>
        </TouchableHighlight>
        <TouchableOpacity
          activeOpacity={0.2}
          style={styles.basicMargin}
          onPress={handlePress}>
            <Text>TouchableOpacity</Text>
        </TouchableOpacity>
        <Pressable
          style={styles.basicMargin}
          onPress={handlePress}
          onPressIn={() => console.log('Press In')}
          onPressOut={() => console.log('Press Out')}>
          <Text>Pressable</Text>
        </Pressable>
        <Text style={styles.head}>편집 이벤트</Text>
        <TextInput
          style={[styles.basicMargin, {borderWidth: 1, height: 30}]}
          onChangeText={(text) => console.log('onChangeText :', text)}
          onChange={(e) => console.log('onChange :', e.nativeEvent.text)}
          onEndEditing={(e) => console.log('onEndEditing TextInputA')}
          onKeyPress={(e) => console.log('onKeyPress :', e.nativeEvent.key)}
        />
        <TextInput
          style={[styles.basicMargin, {borderWidth: 1, height: 30}]}
          onEndEditing={e => console.log('onEndEditing TextInputB')}
        />
        <TextInput
          style={[styles.basicMargin, {borderWidth: 1, height: 30, marginTop: 300}]} value="Keyboard Avoiding"/>        
      </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  head: {
    alignSelf: 'center',
    fontSize: 20,
    marginVertical: 12,
  },
  basicMargin: {
    marginVertical: 12,
    alignItems: 'center',
    marginHorizontal: 24,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
