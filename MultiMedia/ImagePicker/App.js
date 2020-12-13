/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Image,
    Button,
    StatusBar,
} from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import Video from 'react-native-video';


const App = () => {
    let [imageUri, setImageUri] = useState(null);
    let [videoUri, setVideoUri] = useState(null);
    let [photoMode, setPhotoMode] = useState(true);

    pickAlbum = () => {
        ImagePicker.launchImageLibrary({mediaType: 'photo'}, (response) => {
                if ( response.didCancel ) {
                    console.log('취소 선택');
                    return;
                }
                setPhotoMode(true);
                console.log('launch reponse :', response);
                const uri = response.uri;
                setImageUri(uri);
            }
        );
    }

    takePhoto = () => {        
        ImagePicker.launchCamera({mediaType: 'photo', saveToPhotos: true}, (response) => {            
            if ( response.didCancel ) {
                console.log('취소 선택');
                return;
            }
            setPhotoMode(true);
            console.log('launch reponse :', response);
            const uri = response.uri;
            setImageUri(uri);
        })
    }

    pickVideo = () => {
        ImagePicker.launchImageLibrary({mediaType: 'video'}, (response) => {            
            if ( response.didCancel ) {
                console.log('취소 선택');
                return;
            }
            setPhotoMode(false);
            console.log('launch reponse :', response);
            const uri = response.uri;
            setVideoUri(uri);
        })        
    }

    takeVideo = () => {        
        ImagePicker.launchCamera({mediaType: 'video', saveToPhotos: true}, (response) => {            
            if ( response.didCancel ) {
                console.log('취소 선택');
                return;
            }

            setPhotoMode(false);
            console.log('launch reponse :', response);
            const uri = response.uri;
            setVideoUri(uri);
        })
    }    
 
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView style={{flex: 1}}>
                <View
                    style={{flexDirection:'row'}}
                >
                    <Button
                        onPress={pickAlbum}
                        title="사진 선택(앨범)"/>
                    <Button
                        onPress={takePhoto}
                        title="사진 촬영"/>
                    <Button
                        onPress={pickVideo}
                        title="비디오 선택"/>
                    <Button
                        onPress={takeVideo}
                        title="비디오 촬영"/>

                </View>
                { photoMode && imageUrl ?
                    <Image
                        style={{flex: 1}}
                        resizeMode="contain"
                        source={{uri: imageUri}}
                    />            
                : !photoMode && videoUri ?
                    <Video
                        style={{flex:1}}
                        controls={true}
                        source={{uri: videoUri}}
                    />
                : <Text>No Photo/Video URI</Text>
                }
            </SafeAreaView>
        </>
    );
};

export default App;
