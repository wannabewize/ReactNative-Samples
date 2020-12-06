/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaView, StatusBar} from 'react-native';
import axios from "axios";
import MapComponent from './MapViewComponent';


// 검색 테스트
const resolveIDU = async () => {
    try {
        const ret = await axios({
            method: 'get',
            url: 'https://dapi.kakao.com/v2/local/search/keyword.json',
            params: { query: '인덕대학교' },
            headers: {Authorization: 'KakaoAK deb7adbb7fc4176e0df5d487611fa7d8'}
        });
        console.log('ret :', ret.data);        
    } catch (error) {
        console.error(error);        
    }
}

// 초기 데이터
const data = [
    {title : 'CU' , coordinate: {latitude:37.629661, longitude:127.057926}},
    {title : 'CU' , description: "연지스퀘어", coordinate: {latitude:37.630033, longitude:127.055636}},
    {title : 'CU' , coordinate: {latitude:37.631953, longitude:127.056945}},
    {title : 'GS25' , coordinate: {latitude:37.628826, longitude:127.057589}}
]

const App = () => {
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView style={{flex: 1}}>
                <MapComponent stores={data} />
            </SafeAreaView>
        </>
    );
};


export default App;
